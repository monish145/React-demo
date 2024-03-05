import { ChildComp } from "./ChildComp"

export const ParentComp = () => {
    const greetparent = (childName) => {
    alert(`Hello parent ${childName}`)
    }
    
    return <ChildComp greetHandler={greetparent}/>
}