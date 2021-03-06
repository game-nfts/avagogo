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
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import tailwind from 'tailwind-rn'

import LottieView from 'lottie-react-native'

/**
 * Welcome
 */
const Welcome = () => {
    if (Platform.OS === 'ios') {
        return (
            <View style={tailwind('px-5 py-3')}>
                <Text style={tailwind('text-2xl font-bold text-gray-800 text-center')}>
                    Welcome to the Premier DeFi Experience on iOS
                </Text>
            </View>
        )
    } else {
        return (
            <View style={tailwind('px-5 py-3')}>
                <Text style={tailwind('text-2xl font-bold text-gray-800 text-center')}>
                    Welcome to the Premier DeFi Experience on Android
                </Text>
            </View>
        )
    }
}

/**
 * Boards Screen
 */
function Boards({navigation}) {
    const [hasAgreed, setHasAgreed] = React.useState(false)

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={tailwind('')}
        >
            {hasAgreed &&
                <View style={tailwind('py-3')}>
                    <Welcome />

                    <View style={tailwind('px-10 pb-3')}>
                        <Text style={tailwind('text-base font-medium text-red-600 text-center')}>
                            ALL listed dashboards are custom-built
                        </Text>

                        <Text style={tailwind('text-xl font-medium text-red-600 text-center')}>
                            100% "NATIVELY" IN-HOUSE
                        </Text>

                        <Text style={tailwind('text-base font-medium text-red-600 text-center')}>
                            by our amazing Ava GoGo engineers
                        </Text>
                    </View>

                    <Pressable
                        onPress={() => navigation.navigate('BoardsAlphaFinanceLabs')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/alpha-finance-lab.jpg')}
                            resizeMode={'cover'}
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('BoardsBENQI')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/benqi.png')}
                            resizeMode={'cover'}
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('BoardsPangolin')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/pangolin.png')}
                            resizeMode={'cover'}
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('BoardsTraderJoe')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/trader-joe.png')}
                            resizeMode={'cover'}
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('BoardsYieldYak')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/yield-yak.png')}
                            resizeMode={'cover'}
                        />
                    </Pressable>

                    <View style={tailwind('my-5 flex items-center')}>
                        <Text style={tailwind('text-2xl font-bold')}>Polygon (MATIC)</Text>
                        <Text style={tailwind('text-2xl font-bold')}>coming soon..</Text>
                    </View>

                    <Pressable
                        onPress={() => alert('Our team is hard at work to make this happen. Check back soon..')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/aave.jpg')}
                            resizeMode={'cover'}
                        />
                    </Pressable>

                    <Pressable
                        onPress={() => alert('Our team is hard at work to make this happen. Check back soon..')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/curve-finance.jpg')}
                            resizeMode={'cover'}
                        />
                    </Pressable>

                    <View style={tailwind('my-5 flex items-center')}>
                        <Text style={tailwind('text-2xl font-bold')}>Smart Bitcoin (SBCH)</Text>
                        <Text style={tailwind('text-2xl font-bold')}>coming soon..</Text>
                    </View>

                    <Pressable
                        onPress={() => alert('Our team is hard at work to make this happen. Check back soon..')}
                        style={tailwind('items-center')}
                    >
                        <Image
                            style={styles.dappBanner}
                            source={require('../assets/banners/mist-swap.jpg')}
                            resizeMode={'cover'}
                        />
                    </Pressable>
                </View>
            }

            {!hasAgreed &&
                <View>
                    <View style={tailwind('px-5 pt-5')}>
                        <Text style={tailwind('text-lg text-gray-800 text-center')}>
                            Explore and discover <Text style={tailwind('font-bold')}>New & Noteworthy</Text> decentralized applications that you can run directly from Ava GoGo.
                        </Text>
                    </View>

                    <View style={tailwind('py-5 items-center')}>
                        <LottieView
                            style={tailwind('h-48')}
                            source={require('../assets/lottie/online-shopping.json')} autoPlay loop
                        />

                        <Text style={tailwind('text-pink-500 font-semibold')}>
                            Avalanche DeFi Dashboards
                        </Text>
                    </View>

                    <View style={tailwind('px-5 pt-5')}>
                        <Text style={tailwind('text-sm text-red-500 font-bold')}>
                            !! WARNING !!
                        </Text>

                        <Text style={tailwind('mt-3 text-sm text-gray-800')}>
                            The team at Ava GoGo are BUIDLing <Text style={tailwind('font-bold')}>native mobile</Text> experiences to the <Text style={tailwind('font-bold')}>TOP Boards</Text> found throughout the Avalanche ecosystem.
                        </Text>

                        <Text style={tailwind('mt-3 text-sm text-gray-800')}>
                            Be extra cautious as these are 3rd-party decentralized applications that <Text style={tailwind('font-bold')}>HAVE NOT BEEN AUDITED OR REVIEWED</Text> by the team at Ava GoGo.
                        </Text>

                        <Text style={tailwind('mt-3 text-sm text-red-500 font-bold')}>
                            !! USE AT YOUR OWN RISK !!
                        </Text>
                    </View>

                    <View style={tailwind('py-6 items-center')}>
                        <Pressable
                            onPress={() => setHasAgreed(true)}
                            style={tailwind('bg-yellow-200 px-10 py-2 border-2 border-yellow-400 rounded-xl')}
                        >
                            <Text style={tailwind('text-yellow-800 text-xl font-semibold')}>
                                Okay, got it!
                            </Text>
                        </Pressable>
                    </View>
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    dappBanner: {
        width: Dimensions.get('window').width - 20,
        height: 150,

        marginTop: 10,
        marginBottom: 10,

        borderWidth: 5,
        // borderColor: '#73AD21',
        borderColor: '#AAAD21',
        borderRadius: 25,

        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
})

export default Boards
