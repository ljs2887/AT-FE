import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './BoardWrite.css';
import { patchBoardOnePost, updateOnePost } from '../api';

 const BoardUpdate = props => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [user, setUser] = useState('')
  const { id } = props.match.params

  const boardOnePost = useCallback(
    async () => {
      try {
        const {data} = await patchBoardOnePost(id)
        setTitle(data.title)
        setContent(data.content)
        setUser(data.user)
      } catch (error) {
        console.error(error);
      }
    },
    [id]
  )

  useEffect(() => {
    boardOnePost()
  }, [boardOnePost])

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onChangeUser = (e) => {
    setUser(e.target.value)
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    const boardInfo = {
      title,
      content,
      user
    }
    try {
      const { data } = await updateOnePost(id, boardInfo)
      props.history.push(`/board-content/${id}`)
    } catch (error) {
      alert(error.response.data)
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
            <input value = { title } onChange = { onChangeTitle }
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
            <input value = { user } onChange = { onChangeUser }
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
            <textarea value = { content } onChange = { onChangeContent }
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

          <div class="mb-3" style={{ display: 'flex', gap: '10px', width: '80%', paddingLeft: '15%' }}>
            <label 
              htmlFor="exampleFormControlInput1" 
              className="form-label" 
              style={{ width: '80px', fontWeight: 'bold' }}>
                사진
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>

          <div className="boardwrite_lines">
            <hr style = {{ border: 'solid 3px #898989', width: '80%', margin: '10px 0 20px'}}/>
          </div>

        </div>

        <div className="container boardwrite_buttons">
          <button type="button" className="btns btn-success">
            <Link to="/board" style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }}>
              취 소</Link>
          </button>
          
          <button type="button" className="btns btn-success"
            style={{ fontSize: '18px', textDecorationLine: 'none', color: '#fff', fontWeight: 'bold' }} onClick = { onSubmitForm }>
              확 인
          </button>
        </div>
    </>
  )
}

export default BoardUpdate;