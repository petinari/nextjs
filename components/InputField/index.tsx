
import { useState } from "react"
import styles from "./styles.module.css"
import VectorSenha from "./VectorSenha.svg"
import VectorSenha1 from "./VectorSenha1.svg"

type Props = {
    color: string
    placeholder: string
    value: string
    onChange: (newValue: string) => void
    password?: boolean
}

export const InputField = ({color, placeholder, value, onChange, password}: Props) => {

    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    const toggleShowPassword = () =>{
        setShowPassword(!showPassword)
    }

    return(
        <div className={styles.container}
            style={{borderColor: focused ? color : '#fbfbf9', backgroundColor: focused ? '#FFF' : '#f9f9fb'}}>
            <input type={password ? (showPassword ? 'text' : 'password'): 'text'} 
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}/>
            
            {
                password &&
                <div className={styles.showPassword}
                    onClick={toggleShowPassword}    >
                
               {showPassword && <VectorSenha color="grey"/>}
               {!showPassword && <VectorSenha1 color="grey"/>}
            </div>
            }       
                
        </div>
    );      
    
}