

export const Child = ({name, handelChangeCount}) => {

    const handelClick = () => {
        handelChangeCount( prev => prev + 1 )
    }

    return <>
    <p>{name}</p>
    <button onClick={handelClick}>Click +1</button>
    </>
}