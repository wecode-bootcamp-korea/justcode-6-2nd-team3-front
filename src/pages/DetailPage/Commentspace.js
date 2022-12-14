import styled from 'styled-components';
import CommentList from './CommentList'; //댓글리스트
import WriteCommentSpace from './component/WriteCommentSpace';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Commentspace(props) {
  const [commentData, setCommentData] = useState([]);
  const [login, setLogin] = useState(false);
  const params = useParams();
  const pageId = params.id;
  const { myInfor } = props;

  function updateData() {
    axios
      .get(`http://localhost:8000/comment?post=${pageId}`)
      .then(function (res) {
        setCommentData(res.data.postComment.reverse());
      });
  }

  useEffect(updateData, [pageId]);

  return (
    <>
      <Howmany>{commentData && commentData.length}개의 댓글</Howmany>
      <Writespace>
        <WriteCommentSpace
          setCommentData={setCommentData}
          myInfor={myInfor}
          updateData={updateData}
          setLogin={setLogin}
          login={login}
          name={'댓글작성'}
        />
      </Writespace>
      <CommentLists>
        {commentData &&
          commentData.map(f => {
            return (
              <CommentWrapper key={f.comment_id}>
                <CommentList
                  setCommentData={setCommentData}
                  comment={f}
                  setLogin={setLogin}
                  login={login}
                  myInfor={myInfor}
                  updateData={updateData}
                />
              </CommentWrapper>
            );
          })}
      </CommentLists>
    </>
  );
}

const Howmany = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
`;

const Writespace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(229 231 235);
  border-radius: 7px;
  margin-top: 40px;
  padding: 20px;
`;

const CommentWrapper = styled.div`
  padding: 35px 0px;
  border-bottom: 1px solid lightgray;
  :nth-last-child(1) {
    border: none;
  }
`;

const CommentLists = styled.div`
  margin-top: 50px;
  width: 100%;
`;
