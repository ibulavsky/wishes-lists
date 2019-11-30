import {Button, Input} from "antd"
import React from "react"

const AddForm = (props) => {

    return (
        <>
            <Input value={props.itemName}
                   placeholder={`Write ${props.item} name here`}
                   onChange={props.onChangeItemName}
                   style={{width: '200px'}}/>
            <Button key="1" onClick={props.addItem}>Add {props.item}</Button>
        </>
    )
}

export default AddForm
