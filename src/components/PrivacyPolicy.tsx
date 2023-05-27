import { StyleSheet, ScrollView, Text, Image, View} from 'react-native'
import React from 'react';
import { favicon } from '../../assets';

const PrivacyPolicy = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                Thank you for choosing to use the Rosarea Ecommerce Application ("the Application"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access and use the Application. By using the Application, you consent to the collection and processing of your personal information as described in this Privacy Policy.
            </Text>
            <Text style={styles.title}>
                1. Information We Collect
            </Text>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(a) Personal Information: </Text> When you create an account or use certain features of the Application, we may collect personal information such as your name, email address, phone number, billing and shipping address, and payment details.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(b) Log Data: </Text> We collect information that your device sends whenever you use the Application. This may include your IP address, device type, operating system, browser type, and usage data.
                </Text>
            </View>
            <Text style={styles.title}>
                2. Use of Information
            </Text>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(a) Provide and Improve the Application: </Text> We use your personal information to provide, maintain, and improve the functionality and user experience of the Application.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(b) Communication:  </Text> We may use your contact information to send you administrative and promotional messages, respond to your inquiries, and provide customer support.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(c) Analytics and Research: </Text> We may use aggregated and anonymized data for analytics and research purposes to better understand user behavior, preferences, and trends.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(d) Compliance with Legal Obligations: </Text> We may process and disclose your personal information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.
                </Text>
            </View>
            <Text style={styles.title}>
                3. Third-Party Service Providers
            </Text>
            <Text style={styles.text}>
                We may share your personal information with third-party service providers who assist us in operating the Application, providing services, or conducting business activities on our behalf. These service providers have access to your personal information only to perform their tasks and are obligated not to disclose or use it for any other purpose.
            </Text>
            <Text style={styles.title}>
                4. Integration with Third-Party Authorization APIs
            </Text>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(a) Google, Facebook, and Apple Authorization: </Text> The Application may integrate with Google, Facebook, or Apple Authorization APIs to provide login and authentication services. By using these services, you agree to comply with their respective privacy policies and terms.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(b) Data Sharing with Authorization Providers: </Text> When you choose to log in or authenticate using any of the mentioned authorization APIs, we may share certain personal information with the respective authorization provider in accordance with their privacy policies.
                </Text>
            </View>
            <Text style={styles.title}>
                5. Data Security
            </Text>
            <Text style={styles.text}>
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </Text>
            <Text style={styles.title}>
                6. Children's Privacy
            </Text>
            <Text style={styles.text}>
                The Application is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
            </Text>
            <Text style={styles.title}>
                7. Your Rights
            </Text>
            <Text style={styles.text}>
                You have the right to access, update, correct, and delete your personal information. You may also have the right to restrict or object to the processing of your personal information. To exercise these rights, please contact us using the information provided below.
            </Text>
            <Text style={styles.title}>
                8. Third-Party Links
            </Text>
            <Text style={styles.text}>
                The Application may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third parties. We encourage you to read the privacy policies of those third parties when you visit their websites or use their services.
            </Text>
            <Text style={styles.title}>
                9. Changes to this Privacy Policy
            </Text>
            <Text style={styles.text}>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date. Your continued use of the Application after the posting of the updated Privacy Policy constitutes your acceptance of the changes.
            </Text>
            <Text style={styles.title}>
                10. Contact Us
            </Text>
            <Text style={styles.text}>
                If you have any questions, concerns, or requests regarding this Privacy Policy or the privacy practices of the Application, please contact us at info@rosarea.com.
            </Text>
            <Text style={[styles.text, {fontWeight: 'bold', marginTop: 10, }]}>
                By using the Rosarea Ecommerce Application, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. It is important to review this Privacy Policy periodically for any updates or changes.
            </Text>
        </ScrollView>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    container:{
        padding:5
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'green'
    },
    subtitle:{
        fontWeight: 'bold',
        paddingRight: 5,
        color: 'gray'
        
    },
    text:{
        fontSize: 16,
        marginBottom: 5,
    },
    item:{
        display: 'flex',
        flexDirection:'row',
    },
    item_img:{
        width:18,
        height:18,
        marginRight: 8
    },
    item_text:{
        marginRight: 5,
        width: '90%',
        fontSize: 16,
        marginBottom: 5,
    }
})