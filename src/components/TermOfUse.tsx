import { StyleSheet, ScrollView, Text, Image, View} from 'react-native'
import React from 'react';
import { favicon } from '../../assets';

const TermOfUse = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                Please read these Terms of Use "Terms" carefully before using the Rosarea Ecommerce Application "the Application". These Terms govern your access to and use of the Application, including any services, features, or content made available through the Application. By accessing or using the Application, you agree to be bound by these Terms.
            </Text>
            <Text style={styles.title}>
                1. Acceptance of Terms
            </Text>
            <Text style={styles.text}>
                By accessing or using the Application, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Application.
            </Text>
            <Text style={styles.title}>
                2. Use of the Application
            </Text>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(a) Eligibility: </Text> You must be at least 18 years old to access or use the Application. By using the Application, you represent and warrant that you are at least 18 years old.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                    <Text style={styles.subtitle}>(b) Account Registration: </Text>In order to access certain features of the Application, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and are fully responsible for all activities that occur under your account.
                </Text>
            </View>
            <Text style={styles.title}>
                3. Authorization API Integration
            </Text>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(a) Google, Facebook, and Apple Authorization: </Text>The Application may offer the ability to log in or authenticate using Google, Facebook, or Apple Authorization APIs. By using these services, you agree to comply with their respective terms and policies.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(b) User Data: </Text>When you log in or authenticate using any of the mentioned authorization APIs, the Application may collect, use, and store certain personal information in accordance with our Privacy Policy. Please review our Privacy Policy for more information on how we handle your data.
                </Text>
            </View>
            <Text style={styles.title}>
                4. User Obligations
            </Text>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(a) User Conduct: </Text> You agree to use the Application in compliance with applicable laws, regulations, and these Terms. You shall not engage in any activity that may interfere with or disrupt the functioning of the Application or compromise its security.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(b) Prohibited Content: </Text> You shall not upload, post, transmit, or otherwise make available any content that is unlawful, harmful, defamatory, infringing, or otherwise objectionable.
                </Text>
            </View>
            <View style={styles.item}>
                <Image source={favicon} style={styles.item_img}/>
                <Text style={styles.item_text}>
                <Text style={styles.subtitle}>(c) Intellectual Property: </Text> You acknowledge that the Application and its content, including but not limited to text, graphics, logos, and images, are protected by intellectual property rights. You agree not to modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Application without prior written consent.
                </Text>
            </View>
            <Text style={styles.title}>
                5. Limitation of Liability
            </Text>
            <Text style={styles.text}>
                To the extent permitted by applicable law, in no event shall Rosarea or its affiliates, directors, officers, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, arising out of or in connection with the use or inability to use the Application.
            </Text>
            <Text style={styles.title}>
                6. Modification of Terms
            </Text>
            <Text style={styles.text}>
                Rosarea reserves the right to modify these Terms at any time without prior notice. Any changes to these Terms will be effective immediately upon posting. Your continued use of the Application after the posting of the modified Terms constitutes your acceptance of the modified Terms.
            </Text>
            <Text style={styles.title}>
                7. Termination
            </Text>
            <Text style={styles.text}>
                Rosarea reserves the right, in its sole discretion, to suspend or terminate your access to the Application at any time, with or without cause, and with or without notice.
            </Text>
            <Text style={styles.title}>
                8. Governing Law
            </Text>
            <Text style={styles.text}>
            These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of laws principles.
            </Text>
            <Text style={styles.title}>
                9. Severability
            </Text>
            <Text style={styles.text}>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </Text>
            <Text style={styles.title}>
                10. Entire Agreement
            </Text>
            <Text style={styles.text}>
            These Terms constitute the entire agreement between you and Rosarea regarding the Application and supersede all prior and contemporaneous agreements, understandings, negotiations, and discussions, whether oral or written.
            </Text>
            <Text style={styles.title}>
                11. Waiver
            </Text>
            <Text style={styles.text}>
            The failure of Rosarea to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if it is in writing and signed by an authorized representative of Rosarea.
            </Text>
            <Text style={styles.title}>
            12. Contact Information
            </Text>
            <Text style={styles.text}>
            If you have any questions or concerns regarding these Terms or the Application, please contact us at info@rosarea.com.
            </Text>
            <Text style={[styles.text, {fontWeight: 'bold', marginTop: 10, }]}>
            By using the Rosarea Ecommerce Application, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. It is important to review these Terms periodically for any updates or changes.
            </Text>
        </ScrollView>
    )
}

export default TermOfUse

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