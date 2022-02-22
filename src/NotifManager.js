import PushNotification, {Importance} from 'react-native-push-notification'

/**
 * Create Channel
 *
 * Is required by Android to create notification channels.
 */
const createChannel = (_id = 'default-channel', _name = 'Default Channel', _desc = 'Default notification channel.') => {
    PushNotification.createChannel(
        {
            channelId: _id, // (required)
            channelName: _name, // (required)
            channelDescription: _desc, // (optional) default: undefined.
            playSound: false, // (optional) default: true
            soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel [ ${_id} ] returned [ ${created} ]`), // (optional) callback returns whether the channel was created, false means it already existed.
    )
}

/**
 * Local Notification
 */
const localNotif = (_id = 'default-channel', _title, _message) => {
    /* Initialize message id. */
    let messageId = 0

    /* Initialize large icon. */
    let largeIcon = ''

    /* Initialize small icon. */
    // NOTE: https://stackoverflow.com/a/45318726
    let smallIcon = 'ic_notification'

    /* Handle message id. */
    switch(_id) {
    case 'default-channel':
        messageId = 0
        break
    case 'priority-channel':
        messageId = 1
        largeIcon = 'ic_launcher'
        break
    default:
        messageId = 0
    }

    PushNotification.localNotification({
        /* Android Only Properties */
        channelId: _id, // (required) channelId, if the channel doesn't exist, notification will not trigger.
        // ticker: 'My Notification Ticker', // (optional)
        // showWhen: true, // (optional) default: true
        // autoCancel: true, // (optional) default: true
        largeIcon, // (optional) default: 'ic_launcher'. Use '' for no large icon.
        // largeIconUrl: 'https://avagogo.io/logo.png', // (optional) default: undefined
        smallIcon, // (optional) default: 'ic_notification' with fallback for 'ic_launcher'. Use '' for default small icon.
        // bigText: 'My big text that will be shown when notification is expanded', // (optional) default: 'message' prop
        // subText: 'This is a subText', // (optional) default: none
        // bigPictureUrl: 'https://avagogo.io/logo.png', // (optional) default: undefined
        // bigLargeIcon: 'ic_launcher', // (optional) default: undefined
        // bigLargeIconUrl: 'https://avagogo.io/logo.png', // (optional) default: undefined
        // color: 'red', // (optional) default: system default
        // vibrate: true, // (optional) default: true
        // vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        // tag: 'some_tag', // (optional) add tag to message
        // group: 'group', // (optional) add group to message
        // groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
        // ongoing: false, // (optional) set whether this is an 'ongoing' notification
        // priority: 'high', // (optional) set notification priority, default: high
        // visibility: 'private', // (optional) set notification visibility, default: private
        // ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
        // shortcutId: 'shortcut-id', // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
        // onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false
        //
        // when: null, // (optional) Add a timestamp (Unix timestamp value in milliseconds) pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
        // usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
        // timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
        //
        // messageId: 'google:message_id', // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module.
        //
        // actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
        // invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

        /* iOS only properties */
        // category: '', // (optional) default: empty string

        /* iOS and Android properties */
        id: messageId, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
        title: _title, // (optional)
        message: _message, // (required)
        userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
        number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
        // repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    })
}

/**
 * Schedule Notification
 *
 * Set a future notification.
 *
 * eg. `const date = new Date(Date.now() + 3000)`
 */
const schedNotif = (_title, _message, _date) => {
    PushNotification.localNotificationSchedule({
        channelId: 'sched-channel',
        title: _title,
        message: _message,
        autoCancel: true,
        // subText: 'Notification',
        vibrate: true,
        vibration: 300,
        playSound: true,
        soundName: 'default',
        ignoreInForeground: false,
        importance: 'high',
        invokeApp: true,
        allowWhileIdle: true,
        priority: 'high',
        visibility: 'public',
        date: _date,
    })
}

/**
 * Cancel Notifications
 *
 * Will cancel ALL current notifications.
 */
const cancelNotifs = () => {
    PushNotification.cancelAllLocalNotifications()
}

export {
    createChannel,
    localNotif,
    schedNotif,
    cancelNotifs,
}
