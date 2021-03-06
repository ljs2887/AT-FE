import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './BoardWrite.css';
import { createBoardPost } from '../api';

 const BoardWrite = withRouter(props => {
  const [boardTitle, setBoardTitle] = useState('')
  const [boardContent, setBoardContent] = useState('')
  const [boardUser, setBoardUser] = useState('')

  const onChangeBoardTitle = (e) => {
    setBoardTitle(e.target.value)
  }

  const onChangeBoardContent = (e) => {
    setBoardContent(e.target.value)
  }

  const onChangeBoardUser = (e) => {
    setBoardUser(e.target.value)
  }

  const onSubmitBoardForm = async (e) => {
    e.preventDefault()
    const boardInfo = {
      title: boardTitle,
      content: boardContent,
      user: boardUser
    }
    try {
      await createBoardPost(boardInfo)
      props.history.push('/board')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>
        <div className="board_img"></div>
        <div style={{ display: 'flex', gap: '0px', justifyContent: 'center', marginTop: '-30px' }}>
          <Link to="/board" style={{ textDecorationLine: 'none' }}><div className="select"> 게 시 판 </div></Link>
          <Link to="/notice" style={{ textDecorationLine: 'none' }}><div className="notselect"> 공 지 사 항 </div></Link>
          <Link to="/suggestions" style={{ textDecorationLine: 'none' }}><div className="notselect"> 건 의 사 항 </div></Link>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column', marginTop: '30px' }}>
        <div className="board_title">게시판</div>
        <div className="board_line"></div>
        <div className="board_sub">빌라 여러분들의 자유로운 게시판입니다.</div>
      </div>

        <div className="container">
          <div className="boardwrite_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '150px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              for="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                제목
            </label>
            <input value = { boardTitle } onChange = { onChangeBoardTitle }
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="제목을 입력해주세요"
              style={{ height: '50px' }} />
          </div>

          <div className="boardwrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                ID
            </label>
            <input value = { boardUser } onChange = { onChangeBoardUser } 
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1"
              placeholder="아이디를 입력해주세요"
              style={{ height: '50px' }} />
          </div>

          <div className="boardwrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

          <div className="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontSize: '20px', paddingTop: '10px', fontWeight: 'bold' }}>
                내용
            </label>
            <textarea value = { boardContent } onChange = { onChangeBoardContent }
              type="text"
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="내용을 입력해 주세요."
              rows="8"
              style={{ resize: 'none' }} />
          </div>

          <div className="boardwrite_lines">
            <hr style = {{ border: 'solid 1px #805050', width: '75%', margin: '10px 0 20px'}}/>
          </div>

        </div>

        <div className="container boardwrite_buttons">
          <button type="button" className="btns btn-success">
            <Link to="/board" style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
              취 소</Link>
          </button>
          
          <button type="button" className="btns btn-success"
            style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }} onClick = { onSubmitBoardForm }>
              확 인
          </button>
        </div>
    </>
  )
})

export default BoardWrite;