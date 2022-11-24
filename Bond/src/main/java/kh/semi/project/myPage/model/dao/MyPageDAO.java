package kh.semi.project.myPage.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MyPageDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	
	// 회원 탈퇴
	public int secession(int memberNo) {

		return sqlSession.update("myPageMapper.secession", memberNo);
	}


	// 암호화 된 비밀번호 조회
	public String selectEncPw(int memberNo) {
		return sqlSession.selectOne("myPageMapper.selectEncPw", memberNo);
	}

}
