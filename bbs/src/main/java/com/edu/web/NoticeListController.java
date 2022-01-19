package com.edu.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.common.HttpUtil;
import com.edu.service.NoticeService;
import com.edu.serviceImpl.NoticeDAO;
import com.edu.vo.NoticeVO;

public class NoticeListController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 전체 리스트 조회 => noticeList.jsp
		 
		String path = "notice/noticeList.tiles"; //요청할 정보를 path 변수에 담는다.
		
		// 게시글 리스트
		NoticeService service = new NoticeDAO(); //세부기능정의한 것을 추상정의 한 곳의 변수에 담는다?
		List<NoticeVO> list = service.selectList(); 
		
		// noticeList.do 요청정보를 noticeList. jsp페이지로 전달.
		req.setAttribute("noticeList", list);
		HttpUtil.forward(req, resp, path); // 요청할 정보(request, response, path(22번째 줄의요청 정보)를 noticeList.jsp로 보낸다.
	}

}
