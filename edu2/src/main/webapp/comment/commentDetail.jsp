<%@page import="com.edu.model.CommentVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>commentDetail.jsp</title>
</head>
<body>
	<%
	CommentVO vo = (CommentVO) request.getAttribute("comment");
	System.out.println(vo);
	%>
	<table border='1'>
		<tr>
			<th>아이디</th>
			<td><%=vo.getId()%></td>
		</tr>
		<tr>
			<th>이름</th>
			<td><%=vo.getName()%></td>
		</tr>
		<tr>
			<th>내용</th>
			<td><%=vo.getContent()%></td>
		</tr>
	</table>
	<div>
		<button id="updateBtn">수정</button>
		<button id="deleteBtn">삭제</button>
	</div>
	<script>
		//수정. 수정화면 -> 값을변경. -> 수정.do -> commentList.jsp
		document.getElementById('updateBtn').addEventListener('click', updateCommentForm); //updateCommentForm: 실행할 콜백 함수
		function updateCommentForm() {  //윗줄 updateCommentForm에 대한 함수
			var firstTd = document.querySelector('table>tbody>tr>td:nth-of-type(1)'); // td:nth-of-type(1) : td태그중에서 첫번째라는 의미
			//console.log(firstTd);
			var id = firstTd.innerText;
			window.location.href = 'comment/commentUpdateForm.jsp?id='+id;
		}
		
		//삭제. -> 삭제처리.do -> commentList.jsp
		document.getElementById('deleteBtn').addEventListener('click', deleteComment);
		function deleteCommet(){ //윗줄 deleteCommet에 대한 함수
		
		}
		
	</script>
</body>
</html>

