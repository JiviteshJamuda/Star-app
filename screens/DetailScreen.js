import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {},
            url: `http://localhost:5000/get-data?name=${this.props.navigation.getParam("star_name")}`
        };
    }

    componentDidMount() {
        this.getDetails();
    }
    
    getDetails = () => {
        const { url } = this.state;
        axios
            .get(url)
            .then(response => {
                return this.setState({
                    details : response.data.data
                })
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };

    render() {
        const { details } = this.state;
        if (details.name) {
            return (
                <View style={styles.container}>
                    <Card
                        title={details.name}
                        imageProps={{ resizeMode: "contain", width: "100%" }}
                    >
                        <View>
                            {/* <Text style={styles.cardItem}>
                                {`Planet Name : ${details.name}`}
                            </Text> */}
                            <Text style={styles.cardItem}>
                                {`Distance from Earth : ${details.distance}`}
                            </Text>
                            <Text style={styles.cardItem}>
                                {`Planet Mass : ${details.mass}`}
                            </Text>
                            <Text style={styles.cardItem}>
                                {`Planet Radius : ${details.radius}`}
                            </Text>
                            <Text style={styles.cardItem}>
                                {`Gravity : ${details.gravity}`}
                            </Text>
                        </View>
                    </Card>
                </View>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardItem: {
        marginBottom: 10
    }
});
