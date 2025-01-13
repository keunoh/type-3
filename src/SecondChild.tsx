
interface Props {
    data: number | undefined;
}


const SecondChild = (props: Props) => {
    console.log("두 번째 자식 호출~");

    return (
        <div>
            <h3>나는 두 번째 자식놈</h3>
            <h4>자식2 데이터!</h4>
            <p>{props.data}</p>
        </div>
    )
}

export default SecondChild