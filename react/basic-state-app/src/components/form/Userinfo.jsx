import React, { useRef, useState } from 'react';
import {validateForm} from '../../apis/validate.js';

export default function Userinfo() {


    const nameRef= useRef(null);
    const addressRef= useRef(null);
    const ageRef= useRef(null);

    //폼데이터 저장소
    const initForm = {'name':'','address':'','age':''};
    const [form, setForm] = useState(initForm);

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value});    //{'name':'','address':''} 이걸 새로 만드는 작업임   ({...기존값, 추가할 값})
    }

    // const validateForm = () => {
    //     let result = true; 
    //     if(nameRef.current.value === '') {
    //         alert('이름을 입력해주세요')
    //         nameRef.current.focus();
    //         result = false;
    //     } else if (addressRef.current.value === '') {
    //         alert('주소를 입력해주세요')
    //         addressRef.current.focus();
    //         result = false;
    //     } else if (ageRef.current.value === '') {
    //         alert('나이를 입력해주세요')
    //         ageRef.current.focus();
    //         result = false;
    //     } return result;
    // }


    const handleSubmit = (event) => {
        event.preventDefault();
        const param = {
            'nameRef' : nameRef,
            'addressRef' : addressRef,
            'ageRef': ageRef
        };
        if(validateForm(param)) console.log(form);
        }


    return (
        <div>
            <h1>UserINFO</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>Name</label>
                        <input type="text"
                                name="name"
                                value={form.name}   
                                ref={nameRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>Address</label>
                        <input type="text"
                                name="address"
                                value={form.address}
                                ref={addressRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>Age</label>
                        <input type="text"
                                name="age"
                                value={form.age}
                                ref={ageRef}
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <button type="submit">send</button>   
                    </li>
                </ul>
            </form>
        </div>
    );
}

