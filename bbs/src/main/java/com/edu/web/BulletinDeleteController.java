package com.edu.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.serviceImpl.BulletinDAO;
import com.edu.serviceImpl.BulletinService;

public class BulletinDeleteController implements Controller {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 입력값을 읽어오기 -> 삭제 -> 리스트.
		String id = req.getParameter("id");
		
		BulletinService service = new BulletinDAO();
		service.delete(Integer.parseInt(id)); //받아온게 int타입이므로 strint타입으로 변환
		
		resp.sendRedirect("bulletinList.do");

	}

}
