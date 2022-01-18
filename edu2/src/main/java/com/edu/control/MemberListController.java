package com.edu.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.edu.common.Controller;
import com.edu.dao.MemberDAO;
import com.edu.model.MemberVO;

public class MemberListController implements Controller {

		@Override
		public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

			MemberDAO dao = new MemberDAO();
			
			List<MemberVO> list = dao.getMemberList();
			req.setAttribute("memberList", list);
			
			req.getRequestDispatcher("memberResult/memberListOutput.jsp").forward(req, resp);
					
		}

	}

	/*
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		String pw = req.getParameter("pw");
		
		req.setAttribute("id", id);
		req.setAttribute("pw", pw);
		
		//resp.sendRedirect("member/memberList.jsp");
		req.getRequestDispatcher("member/memberList.jsp").forward(req, resp);
		//forward는 현재 페이지를 확인하고 만들어야함
	}

}
*/