import React from 'react';
import {StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity, Dimensions} from 'react-native';
import Cross from './Cross.js';
import Circle from './Circle.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const board = new Array(3);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(3).fill(0);
        }

        this.state = {
            player: 1,
            fields: board,
            text: 'GRAJ',
            stop: false,
            counter: 9,
        };
    }

    makeMove(i, j) {
        if (this.state.stop) {
            return;
        }
        this.state.fields[i][j] = this.state.player;
        this.state.counter--;

        this.checkWin(i, j);

        this.setState({
            player: this.state.player === 1 ? 2 : 1,
        });
    }

    reset() {
        const board = new Array(3);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(3).fill(0);
        }
        this.setState({
            player: 1,
            fields: board,
            text: 'GRAJ',
            stop: false,
            counter: 9,
        });
    }

    checkWin(i, j) {
        const {fields, player} = this.state;

        if ((fields[i][0] === fields[i][1]) && (fields[i][1] === fields[i][2])) {
            this.win(player);
        }
        else if ((fields[0][j] === fields[1][j]) && (fields[1][j] === fields[2][j])) {
            this.win(player);
        }
        else if (i === j) {
            if ((fields[0][0] === fields[1][1]) && (fields[1][1] === fields[2][2])) {
                this.win(player);
            }
        }
        else if (i + j === 2) {
            if ((fields[0][2] === fields[1][1]) && (fields[1][1] === fields[2][0])) {
                this.win(player);
            }
        }
        else if (this.state.counter === 0) {
            console.log(this.state.counter, 'ss');
            this.tie();
        }
    }

    tie() {
        this.setState({
            text: `Remis`,
            stop: true,
        });
    }


    win(player) {
        this.setState({
            text: `Wygrał gracz ${player}`,
            stop: true,
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{position: 'absolute', top: 10, width: '90%'}}>
                    <Text style={{width: '100%', textAlign: 'center', fontSize: 38, color: '#fff'}}>
                        {this.state.text}
                    </Text>
                </View>
                <View style={styles.board}>
                    {
                        this.state.fields.map((a, i) => {
                            return <View style={styles.row} key={i}>
                                {a.map((b, j) => {

                                    return <View style={styles.field} key={j}>
                                        <TouchableHighlight
                                            style={{justifyContent: 'center', width: '100%', alignContent: 'center'}}
                                            onPress={() => !b ? this.makeMove(i, j) : null}
                                        >
                                            {
                                                b === 1 ? <Circle/> : b === 2 ? <Cross/> : <Text/>
                                            }
                                        </TouchableHighlight>
                                    </View>;
                                })}
                            </View>;
                        })
                    }
                </View>
                <View style={{position: 'absolute', bottom: 10, width: '90%'}}>
                    <TouchableOpacity style={styles.resetButton} onPress={() => this.reset()}>
                        <Text style={{width: '100%', textAlign: 'center', fontSize: 18, color: '#fff'}}>RESET</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        position: 'relative',
    },
    board: {
        flex: 1,
        alignSelf: 'center',
        aspectRatio: 1,
        borderColor: '#000',
    },

    row: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    field: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        aspectRatio: 1,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
    },
    resetButton: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#28a745',
        borderRadius: 15,
    }
});


