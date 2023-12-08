import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const StatusDueButtons = ({ status }) => {
  let buttons = []
  if (status.includes('water')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.blueButton, styles.m5]}
      >
        water
      </Button>
    )
  }
  if (status.includes('electricity')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.greenButton, styles.m5]}
      >
        electricity
      </Button>
    )
  }
  if (status.includes('sewerage')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.redButton, styles.m5]}
      >
        sewerage
      </Button>
    )
  }
  if (status.includes('assessment')) {
    buttons.push(
      <Button
        mode="contained"
        uppercase={true}
        style={[styles.yellowButton, styles.m5]}
      >
        assessment
      </Button>
    )
  }
  return buttons
}

const styles = StyleSheet.create({
  blueButton: {
    backgroundColor: '#4285F4',
  },

  redButton: {
    backgroundColor: '#EA4335',
  },

  greenButton: {
    backgroundColor: '#34A853',
  },

  yellowButton: {
    backgroundColor: '#FBBC05',
  },

  m5: {
    margin: 5,
  },
})

export default StatusDueButtons
