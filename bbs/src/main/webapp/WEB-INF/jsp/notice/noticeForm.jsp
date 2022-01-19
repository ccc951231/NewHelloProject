<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<h3>글등록</h3>
<form action="${pageContext.request.contextPath}/noticeAdd.do"
	method="post">
	<table border="1">
		<tbody>
			<tr>
				<th>제목</th>
				<td><input type="text" name="title"></td>
			</tr>
			<tr>
				<th>내용</th>
				<td><input type="text" name="content"></td>
			</tr>
			<tr>
				<th>작성일시</th>
				<td><input type="text" name="wdate"></td>
			</tr>
			<tr>
				<th>조회수</th>
				<td><input type="text" name="Hit"></td>
			</tr>
		</tbody>
	</table>
</form>