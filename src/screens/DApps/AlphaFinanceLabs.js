/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
    createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

import tailwind from 'tailwind-rn'

import LottieView from 'lottie-react-native'

import PoolListItem from '../../components/PoolListItem'

/* Initialize tab (navigation). */
const Tab = createMaterialTopTabNavigator()

/**
 * Yield
 */
const Yield = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={tailwind('')}
        >
        <View style={tailwind('m-3')}>

            <PoolListItem
                basePair={'AVAX'}
                tradePair={'USDT'}
                platform={'Trader Joe'}
            />

            <PoolListItem
                basePair={'USDC'}
                tradePair={'AVAX'}
                platform={'Trader Joe'}
            />

            <PoolListItem
                basePair={'WETH'}
                tradePair={'AVAX'}
                platform={'Trader Joe'}
            />

            <PoolListItem
                basePair={'AVAX'}
                tradePair={'DAI'}
                platform={'Trader Joe'}
            />

        </View>
        </ScrollView>
    )
}

/**
 * Liquidity
 */
const Liquidity = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={tailwind('')}
        >
            <View style={tailwind('mt-10 items-center')}>
                <Text style={tailwind('text-gray-500 text-lg font-light text-center uppercase')}>
                    no liquidity providers found
                </Text>

                <LottieView
                    style={tailwind('h-48')}
                    source={require('../../assets/lottie/no-result-found.json')} autoPlay loop
                />
            </View>
        </ScrollView>
    )
}

/**
 * DApp Screen
 */
function DApp({navigation}) {
    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            //
        }

        /* Fetch info. */
        fetchInfo()
    }, [])

    return (
        <View style={tailwind('h-full')}>
            <Image
                style={tailwind('w-full absolute')}
                source={require('../../assets/backgrounds/gradient-purple-pink.jpg')}
            />

            <View style={tailwind('my-2 flex flex-row justify-between')}>

                <View style={tailwind('w-6/12 my-3 ml-3 p-3 bg-gray-700 opacity-90 rounded-xl')}>
                    <View style={tailwind('flex flex-row items-center')}>
                        <Ionicons
                            style={tailwind('mr-2 text-gray-300')}
                            name={'lock-closed-outline'}
                            size={30}
                        />

                        <Text style={tailwind('text-yellow-300 font-bold text-lg text-center uppercase')}>
                            Total Value Locked
                        </Text>
                    </View>

                    <Text style={tailwind('mt-5 text-gray-50 text-2xl font-bold text-center')}>
                        $465,244,384
                    </Text>
                </View>

                <View style={tailwind('w-5/12 m-2 p-3 bg-gray-700 opacity-90 rounded-xl')}>
                    <View style={tailwind('flex flex-row items-center')}>
                        <Ionicons
                            style={tailwind('mr-2 text-gray-300')}
                            name={'globe-outline'}
                            size={30}
                        />

                        <Text style={tailwind('text-yellow-300 font-bold text-lg text-center uppercase')}>
                            Global Market
                        </Text>
                    </View>

                    <View style={tailwind('mt-3')}>
                        <Text style={tailwind('text-gray-300 text-sm font-medium')}>
                            Total Collateral
                        </Text>

                        <Text style={tailwind('text-gray-50 text-base font-bold text-right')}>
                            $255,022,498
                        </Text>
                    </View>

                    <View style={tailwind('mt-3')}>
                        <Text style={tailwind('text-gray-300 text-sm font-medium')}>
                            Total Borrow
                        </Text>

                        <Text style={tailwind('text-gray-50 text-base font-bold text-right')}>
                            $149,184,228
                        </Text>
                    </View>

                    <View style={tailwind('mt-3')}>
                        <Text style={tailwind('text-gray-300 text-sm font-medium')}>
                            Active Positions
                        </Text>

                        <Text style={tailwind('text-gray-50 text-base font-bold text-right')}>
                            865 Positions
                        </Text>
                    </View>
                </View>
            </View>

            <Tab.Navigator style={tailwind('')}>
                <Tab.Screen
                    name="Yield"
                    component={Yield}
                    options={{
                        title: 'Yield Farming'
                    }}
                />
                <Tab.Screen
                    name="Liquidity"
                    component={Liquidity}
                    options={{
                        title: 'Liquidity'
                    }}
                />
            </Tab.Navigator>
        </View>
    )
}

export default DApp
