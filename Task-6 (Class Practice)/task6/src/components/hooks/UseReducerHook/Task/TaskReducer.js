export const initialStateValue={
    loading:true,
    users:[],
    error:""
}

export function taskreducer(state,action){
    switch(action.type){
        case "fetch_start":
            return {...state,loading:true}
        case "fetch_end":
            return {...state,loading:false}
        case "fetch_success":
            return {...state,loading:false,users:"data"}
        case "fetch_failed":
            return {...state,error:"error message"}
    }
}