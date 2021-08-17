import React from 'react';
import classes from './../../Header.module.css';
import Block from './Block/Block';

const List = (props) => {
    
    let listElement = props.prList.map( l => <Block title={l.title} addList={props.addList} dataList={props.dataList} />)

  
    return (
        <div className={classes.listName}>
             <div className={classes.container}>
                 <h1>SOME LIST</h1>
                 <div className={classes.blFl}>
                     {listElement}
                 </div>
             </div>
        </div>
    )
}

export default List;