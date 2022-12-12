import {useEffect, useState} from "react";
import AuthContext from "./AuthContext";
import fetchData from "../utils/fetchData";

export default function AuthProvider({children}){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // 로그인을 하지 않은 상태
        // 토큰을 발급받지 않은 상태
        if (!localStorage.getItem("token")){
            return setIsLoaded(true);
        }

        // 토큰을 보냈을때 토큰에 일치하는 /user의 정보를 요청
        fetchData(`${process.env.REACT_APP_SERVER}/user`)
        .then(data => {
            // 유저 state를 업데이트
            setUser(data)
        })
        .catch(error => {
            console.log(error)
            setError(error);
        })
        .finally(() => setIsLoaded(true));
    }, [])

    // 로그인
    function signIn(data, callback){
        setUser(data.user);
        // 로그인 시 로컬스토리지에 토큰을 저장
        localStorage.setItem("token", data.token);
        callback()
    }

    // 로그아웃
    function signOut(){
        setUser(null);
        // 로컬스토리지에서 토큰을 삭제
        localStorage.removeItem("token");
    }

    const value = {user, setUser, signIn, signOut}

    if(error){
        return <p>failed to fetch a user</p>
    }
    if (!isLoaded){
        return <p>fething a user...</p>
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}