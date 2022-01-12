package com.edu.full;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.edu.common.DAO;


// com.edu.full.FullDAO
// title, startDate, endDate => VO, Map: key, value => 한건.
public class FullDAO extends DAO {

	public boolean deleteSchedule(Map<String, String> map) throws SQLException {
		String sql = "delete from full_calendar where title=?";
		connect();

		psmt = conn.prepareStatement(sql);
		psmt.setString(1, map.get("title"));

		int r = psmt.executeUpdate();
		if (r > 0) {
			return true;
		} else {
			return false;
		}
	}

	// 일정 등록하는 메소드.
	public boolean insertSchedule(Map<String, String> map) throws SQLException {

		String sql = "insert into full_calendar values(?,?,?)";
		connect();
		psmt = conn.prepareStatement(sql);
		psmt.setString(1, map.get("title"));
		psmt.setString(2, map.get("startDate"));
		psmt.setString(3, map.get("endDate"));

		int r = psmt.executeUpdate();
		if (r > 0) {
			return true;
		} else {
			return false;
		}
	}

	// 전체 일정을 가지고 오는 메소드.
	public List<Map<String, String>> getScedules() {
		String sql = "select title, start_date, end_date from full_calendar";
		connect(); // ctrl키 눌러서 DAO 연결을 확인할 수 있다.
		// 반환타입 : List<Map<String, String>>
		// [{title:"test", start:"2020-01-01", end:"2020-01-02"},{},{}]
		List<Map<String, String>> scheduleList = new ArrayList<Map<String, String>>(); // 배열에 Map타입의 인스턴스를 담을 수 있다, 왼쪽
																						// 오른쪽 타입은 같아야한다.
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) { // 건수만큼 반복한다.
				Map<String, String> map = new HashMap<String, String>();
				map.put("title", rs.getString("title"));
				map.put("start", rs.getString("start_date"));
				map.put("end", rs.getString("end_date"));

				scheduleList.add(map);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

		return scheduleList;
	}

}
