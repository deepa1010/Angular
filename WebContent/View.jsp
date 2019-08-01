<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%
String id = request.getParameter("userid");
String driver = "com.mysql.jdbc.Driver";
String connectionUrl = "jdbc:mysql://localhost:3306/";
String database = "test";
String userid = "root";
String password = "raghava";
try {
Class.forName(driver);
} catch (ClassNotFoundException e) {
e.printStackTrace();
}
Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;
%>
<!DOCTYPE html>
<html>
<body bgcolor=silver>

<h1>Retrieve data from database in jsp</h1>
<table border="1">
<tr>
<td>applicant id</td>
<td>reg Date</td>
<td>Description</td>
<td>priority</td>
<td>VSD</td>
<td>VED</td>
<td> assigned to</td>
</tr>
<%
try{
connection = DriverManager.getConnection(connectionUrl+database, userid, password);
statement=connection.createStatement();
String sql ="select * from applicants";
resultSet = statement.executeQuery(sql);
while(resultSet.next()){
%>
<tr>
<td><%=resultSet.getInt("applicantid") %></td>
<td><%=resultSet.getDate("regDate") %></td>
<td><%=resultSet.getString("Description") %></td>
<td><%=resultSet.getInt("priority") %></td>
<td><%=resultSet.getDate("valstadate") %></td>
<td><%=resultSet.getDate("valenddate") %></td>
<td><%=resultSet.getString("assignedto") %></td>
</tr>
<%
}
connection.close();
} catch (Exception e) {
e.printStackTrace();
}
%>
</table>
</body>
</html>