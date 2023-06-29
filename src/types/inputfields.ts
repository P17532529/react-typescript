export interface Notes{
    id:number;
    todo:string;
}

export interface Inputfield_Props{
    settodo:React.Dispatch<React.SetStateAction<string>>;
    onclick:()=>void
}