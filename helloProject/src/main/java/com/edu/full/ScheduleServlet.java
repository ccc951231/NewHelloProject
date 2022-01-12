package com.edu.full;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@WebServlet("/ScheduleServlet")
public class ScheduleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
    public ScheduleServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/json;charset=utf-8"); //json타입으로 사용
		
		FullDAO dao = new FullDAO(); //FullDAO를 호출한다(같은 패키지 내이므로 그냥 사용가능)
		List<Map<String, String>> schedules = dao.getScedules();
		
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(schedules)); //웹 브라우저에 출력.
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	
		doGet(request, response);
	}

}
