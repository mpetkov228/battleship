function Ship(length) {
    return {
        length,
        timesHit: 0,
        hit() {
            this.timesHit++;
        },
        isSunk() {
            return this.timesHit >= this.length;
        }
    };
}

export default Ship;