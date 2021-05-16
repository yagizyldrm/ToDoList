import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming/Colors';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: Colors[colorNames.todo.headerBlue],
    },
    container: {
        flex: 1,
        backgroundColor: Colors[colorNames.todo.background],
    },
    addButton: {
        right:0,
        bottom:5,
        position: 'absolute',
        backgroundColor: 'transparent',
        width: Metrics.width * 0.18,
        height: Metrics.width * 0.18,
        flexDirection: 'column',
        marginTop: Metrics.width * 1.525,
        marginLeft: Metrics.width * 0.82,
    },
    iconContainer: {
        width: Metrics.width * 0.146,
        height: Metrics.width * 0.146,
        aspectRatio: 1,
    },
    icon: {
        color: Colors[colorNames.todo.addButton],
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 50,
        width: Metrics.width * 0.09,
        height: Metrics.width * 0.09,
    },
    iconCon: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: 60,
    },

    // DummyData

    todoBoxContainer: {
        flex: 1,
        backgroundColor: Colors[colorNames.todo.background],

    },
    flatListContainer: {
        flex: 1,
        backgroundColor: 'yellow',
    },

    flatListDoneContainer: {
        flexGrow: 1,
        backgroundColor: 'yellow',
        maxHeight: Metrics.width * 0.4,
        minHeight: Metrics.width * 0.1
    },

    // Todo Box
    todoBox: {
        flex: 0.3,
        backgroundColor: Colors[colorNames.todo.background],
        borderColor: Colors[colorNames.todo.addButton],
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: Metrics.width * 0.05,
        marginVertical: Metrics.width * 0.02,
        alignItems: "center",
        flexDirection: 'row',
        paddingLeft: 15,
        maxHeight: Metrics.width * 0.14,
        minHeight: Metrics.width * 0.1,
    },

    checkIconContainer: {
        width: Metrics.width * 0.055,
        height: Metrics.width * 0.055,
        aspectRatio: 1,
        position: 'relative',
    },
    checkIcon: {
        color: Colors[colorNames.todo.checkBoxBorder],
        alignItems: 'baseline',
        borderRadius: 50,


    },

    // todo Text
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10,
        paddingTop: 45,
    },
    messageText: {
        fontFamily: Fonts.type.regular,
        width: Metrics.width * 0.58,
        height: Metrics.width * 0.14,
        color: Colors[colorNames.todo.todoBoxText],
    },

    // Done

    doneBox: {
        backgroundColor: Colors[colorNames.todo.background],
        borderColor: Colors[colorNames.todo.doneBoxBorder],
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: Metrics.width * 0.05,
        marginVertical: Metrics.width * 0.02,
        alignItems: "center",
        flexDirection: 'row',
        paddingLeft: 15,
        maxHeight: Metrics.width * 0.14,
        minHeight: Metrics.width * 0.1,
    },
    checkedIconContainer: {
        width: Metrics.width * 0.055,
        height: Metrics.width * 0.055,
        aspectRatio: 1,
        position: 'relative',
    },
    checkedIcon: {
        color: Colors[colorNames.todo.checkBoxBorder],
        alignItems: 'baseline',
        borderRadius: 50,
    },

    // tamamlanlar bandı
    completedTextContainer: {
        height: Metrics.width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors[colorNames.todo.headerBlue],
        marginBottom: 5,
    },
    completedText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors[colorNames.todo.completedText]
    },

    // completed text
    doneTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 10,
        paddingTop: 45,
    },
    doneMessageText: {
        fontFamily: Fonts.type.regular,
        width: Metrics.width * 0.58,
        height: Metrics.width * 0.14,
        color: Colors[colorNames.todo.checkBoxBorder],
    }, 

    // DeleteIcon
    deleteIconContainer: {
        width: Metrics.width * 0.055,
        height: Metrics.width * 0.055,
        aspectRatio: 1,
        position: 'relative',
        marginLeft: Metrics.width * 0.1,

    },
    deleteIcon: {
        color: Colors[colorNames.todo.deleteButton],
    },

    // drawer
    drawerWidth: Metrics.drawerWidth, 

    infoContainer: {
        marginTop:20,
        width: Metrics.drawerWidth, 
        height: Metrics.width *0.3, 
        backgroundColor: Colors[colorNames.addNewNote.border],
        borderTopRightRadius: Metrics.borderRadiusFullRound/10,
    },
    appName: {
        color:"white",
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(35), 
        marginLeft: Metrics.width * 0.03, 
    },
    userName: { 
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(20), 
        marginLeft: Metrics.width * 0.03, 
    },
    email: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(14), 
        marginLeft: Metrics.width * 0.03,
    },
    categoryTitleContainer: {
        width: Metrics.drawerWidth, 
        backgroundColor: Colors[colorNames.drawer.categoryTitleBackground], 
        borderRadius: Metrics.borderRadiusFullRound,
    },
    categoriesContainer: {
        marginTop: Metrics.width * 0.06,
    },
    touchableContainer: {
        width: Metrics.drawerWidth,  
        backgroundColor: Colors[colorNames.drawer.touchableBackground],
        marginTop: Metrics.width * 0.03,
        flexDirection:'row',
        borderRadius: Metrics.borderRadiusFullRound,    
    },
    categoryText: {
        marginLeft: Metrics.width * 0.03, 
        marginVertical: Metrics.width * 0.02,
    },
    drawerIcons: {
        width: Metrics.width * 0.05,
        height: undefined,
        aspectRatio: 1,
        marginLeft:Metrics.width * 0.022,
        marginTop: Metrics.width / 360,
    },
    drawerIconsContainer: {
        width: Metrics.width * 0.085,
        height: Metrics.width * 0.085,
        aspectRatio: 1,
    }
});
