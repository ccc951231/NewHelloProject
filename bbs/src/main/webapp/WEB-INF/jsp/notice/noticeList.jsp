<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script>
function formSubmit(id){
	document.forms.frm.id.value = id;
	document.forms.frm.submit();
}
</script>

<form id="frm" name="frm" action="${pageContext.request.contextPath }/bulleinSelect.do" method="post">
	<input type="hidden" name="id">
</form>
<table class="table" border="1">


	<thead>
		<tr>
			<th>글번호</th>
			<th>글제목</th>
			<th>글내용</th>
			<th>작성일시</th>
			<th>조회수</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="notice" items="${noticeList }">
			<tr onclick="formSubmit(${noticeList})">
				<td>${notice.ntcId }</td>
				<td>${notice.ntcTitle }</td>
				<td>${notice.ntcContent }</td>
				<td>${notice.ntcWdate }</td>
				<td>${notice.ntcHit }</td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<a href="${pageContext.request.contextPath}/noticeForm.do">글 등록</a>
