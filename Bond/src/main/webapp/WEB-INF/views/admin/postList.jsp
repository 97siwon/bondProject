<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>


<!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>관리자 | 게시물 관리</title>

    <link rel="stylesheet" href="/resources/css/admin/layout/layout-list-style.css">
    <link rel="stylesheet" href="/resources/css/admin/post-list-style.css">
    <link rel="stylesheet" href="/resources/css/admin/add/searchbar-style.css">
    <link rel="stylesheet" href="/resources/css/admin/add/sidebar-style.css">
    
</head>
<body>

    <jsp:include page="/WEB-INF/views/admin/add/adminPage-header.jsp" />

    <main> <!-- for background-color -->

        <section class="main"> 
            
	<jsp:include page="/WEB-INF/views/admin/add/sidebar.jsp" />


            <section class="content">
                <div class="content-header">
                    <h6>밴드 관리 / 게시물 관리</h6>
                    <h3>게시물 검색</h3>
                </div>
                
				<form id="searchbar" action="/printPostList" method="GET">
				
				    <select name="type">
				        <option value="">분류1</option>
				        <option value="">분류2</option>
				        <option value="">분류3</option>
				    </select>
				
				    <div class="keyword-box">
				        <div class="input-box"><input type="text" name="keyword"></div>
				        <button class="btn">검색</button>
				    </div>
				
				    <select name="number">
				        <option value="">10</option>
				        <option value="">20</option>
				        <option value="">50</option>
				    </select>
				
				</form> <!-- end .searchbar -->

                <div class="content-body">
                    
                    <div class="list-header">
                        <span class="postNo">번호</span>
                        <span class="memberNo">회원번호</span>
                        <span class="groupNo">모임번호</span>
                        <span class="postContent">내용</span>
                        <span class="postDate">작성일</span>
                        <span class="postDelYN">상태</span>
                    </div>

                    <div class="list-body">

                    <!-- ajax를 이용해 불러온 리스트가 들어갈 영역 -->    

                    </div>
					
					<!-- 목록 불러오기 반복문 -->
<%--                     <c:forEach var="post" items="${postList}">
                    <form action="/printPostList" class="list-frm" method="GET">
                        <button class="list-btn">
                            <span class="postNo">${post.postNo}</span>
                            <span class="memberNo">${post.memberNo}</span>
                            <span class="groupNo">${post.groupNo}</span>
                            <span class="postContent">${post.postContent}</span>
                            <span class="postDate">${post.postDate}</span>
                            <span class="postDelYN">${post.postDelYN}</span>
                        </button>
                    </form>
					</c:forEach> --%>
					
                </div>


            <div class="content-footer">
            	<span>prev</span>
            	<span>1</span>
            	<span>2</span>
            	<span>3</span>
            	<span>next</span>
            </div>
            </section> <!-- admin-content end -->
        </section> <!-- main-content end -->
    </main>

	<jsp:include page="/WEB-INF/views/common/footer.jsp" />

    <%-- jQuery CDN 방식으로 추가 --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
	
    <script src="/resources/js/admin/sidebar.js"></script>
    
    <script src="/resources/js/admin/postList.js"></script>

</body>
</html>