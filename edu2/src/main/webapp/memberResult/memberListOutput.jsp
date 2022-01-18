<%@page import="com.edu.model.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberListOutput.jsp</title>
</head>
<body>

	<h3>사용자이름은: ${login.name }입니다!!</h3>

	<%-- <%
	List<MemberVO> list = (List<MemberVO>) request.getAttribute("memberList"); //속성지정.
	if (list.size() != 0) {
	%>

	${memberList } -> list
 --%>

	<c:choose>
		<c:when test="${empty memberList }">
			<h3>회원리스트</h3>
			<p>조회된 정보가 없습니다.</p>
		</c:when>
		<c:otherwise>
			<h3>회원리스트</h3>
			<table border="1">
				<thead>
					<tr>
						<th>아이디</th>
						<th>이름</th>
						<th>메일</th>
						<th>비밀번호</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="member" items="${memberList }">
						<tr>
							<td>${member.id }</td>
							<td>${member.name }</td>
							<td>${member.mail }</td>
							<td>${member.passwd }</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</c:otherwise>
	</c:choose>
	
	

<%@include file="home.jsp"%>
</body>
</html>