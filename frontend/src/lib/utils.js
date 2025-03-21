export function fomatMessageTime(date){
    return new Data(date),toLocateTimeString("en-US",{
        hour: "2-dight",
        minute: "2-digit",
        hour12: false,
    })
}