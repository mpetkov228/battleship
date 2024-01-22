function Ship(length) {
    return {
        length,
        timesHit: 0,
        isSunk: false,
        hit() {
            this.timesHit++;
        }
    };
}

export default Ship;