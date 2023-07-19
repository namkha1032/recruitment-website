import { useState, useEffect } from "react"
import axios from "axios"

const TableRow = (props) => {
    const { room, roomList, setRoomList } = props
    const [updating, setUpdating] = useState(false)
    const [updatedRoomName, setUpdatedRoomName] = useState("")

    function handleUpdateRoom() {
        let newRoomList = roomList.map(eachRoom => {
            if (eachRoom.roomid != room.roomid) {
                return eachRoom
            }
            else {
                return {
                    ...eachRoom,
                    roomname: updatedRoomName
                }
            }
        })
        setRoomList(newRoomList)
        setUpdating(false)
    }
    function handleDeleteRoom() {
        let newRoomList = roomList.filter(eachRoom => {
            return eachRoom.roomid != room.roomid
        })
        setRoomList(newRoomList)
    }
    return (
        <>
            <tr>
                <td>
                    {room.roomid}
                </td>
                <td>
                    {updating
                        ?
                        <input
                            type="text"
                            value={updatedRoomName}
                            onChange={(event) => { setUpdatedRoomName(event.target.value) }} />
                        :
                        room.roomname
                    }
                </td>
                <td>
                    {updating
                        ?
                        <button onClick={handleUpdateRoom}>
                            save
                        </button>
                        :
                        <button onClick={() => {
                            setUpdating(true)
                            setUpdatedRoomName(room.roomname)
                        }}>
                            update
                        </button>
                    }
                </td>
                <td>
                    <button onClick={handleDeleteRoom}>
                        del
                    </button>
                </td>
            </tr>
        </>
    )
}

const App = () => {
    let [roomList, setRoomList] = useState([])
    let [newRoomName, setNewRoomName] = useState("")
    useEffect(() => {
        async function fetchData() {
            // let response = await fetch("http://localhost:3000/data/roomlist.json")
            // let newRoomList = await response.json()
            // setRoomList(newRoomList)
            let response = await axios.get("http://localhost:3000/data/roomlist.json")
            setRoomList(response.data)

            // dòng 77-78-79 chức năng y chang dòng 80-81
            // thử comment dòng 80-81 và uncomment dòng 77-78-79 rồi chạy thử
        }
        fetchData()
    }, [])
    function handleAddNewRoom() {
        let newRoomList = roomList.concat(
            {
                roomid: roomList.length + 1,
                roomname: newRoomName
            }
        )
        setRoomList(newRoomList)
        setNewRoomName("")
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>
                            ID
                        </td>
                        <td>
                            Room name
                        </td>
                        <td>
                            Change
                        </td>
                        <td>
                            Delete
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {roomList.map(room => (
                        <TableRow key={room.roomid}
                            room={room}
                            roomList={roomList}
                            setRoomList={setRoomList}
                        />
                    ))}
                </tbody>
            </table>
            <input type="text" value={newRoomName} onChange={(event) => { setNewRoomName(event.target.value) }} />
            <button onClick={handleAddNewRoom}>add</button>
        </>
    )
}

export default App