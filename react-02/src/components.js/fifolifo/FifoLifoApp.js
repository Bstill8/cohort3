import React, { useState } from 'react';
import { Queue, Stack, BagController } from './fifoLifo.js'
import List from './List.js'
import './FifoLifoApp.css'
import ThemeContext from '../../ThemeContext'

const fifo = new Queue();
const lifo = new Stack();
const bagController = new BagController();

const FifoLifoApp = () => {
  //Should refactor to not have stack and queue in react state (could show next or removed instead)
  const [queue, setQueue] = useState(fifo.queue);
  const [stack, setStack] = useState(lifo.stack);

  const handlePutIn = () => {
    const shape = bagController.pull();

    fifo.enqueue(shape);
    const queueUpdate = fifo.queue.slice();
    setQueue(queueUpdate);

    lifo.push(shape);
    const stackUpdate = lifo.stack.slice();
    setStack(stackUpdate);
  }

  const handleTakeOut = () => {
    fifo.dequeue();
    const queueUpdate = fifo.queue.slice();
    setQueue(queueUpdate);

    lifo.pop();
    const stackUpdate = lifo.stack.slice();
    setStack(stackUpdate);
  }

  return (
    <ThemeContext.Consumer>
      {({ color, fontSize}) => (
        <div style={{ color: color, fontSize: fontSize }}>
          <div>
            <button onClick={handlePutIn}>Put In</button>
            <button onClick={handleTakeOut}>Take Out</button>
          </div>
          <div className="lists">
            <h3 className="QStext" style={{ color: color, fontSize: fontSize }}>Queue</h3>
            <h3 className="QStext" style={{ color: color, fontSize: fontSize }}>Stack</h3>
            <List list={queue} type="queue" />
            <List list={stack} type="stack" />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>

  );
}

export default FifoLifoApp;