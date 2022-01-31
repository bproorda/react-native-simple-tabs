import { StyleSheet, Text, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Tab = (props) => {
  const { onPress, title = 'Save', currentTab } = props;
  //console.log(props)

  const tabBackgroundcolor = currentTab ? 'green' : 'gray'

  return (
    <Pressable style={[styles.tab, {backgroundColor: tabBackgroundcolor}]} onPress={onPress}>
      <Text style={styles.tabText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    height: '90%',
  },
  tabText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Tab;
