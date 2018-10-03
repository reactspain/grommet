import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction, Car, CircleInformation, Currency, TreeOption } from 'grommet-icons';

import { Box, Grommet, FormField, Tab, Tabs, Text, TextInput } from '../';
import { grommet } from '../../themes';

const UncontrolledTabs = () => (
  <Grommet theme={grommet}>
    <Tabs>
      <Tab title='Tab 1'>
        <Box margin='small' pad='large' align='center' background='accent-1'>
          <Attraction size='xlarge' />
        </Box>
      </Tab>
      <Tab title='Tab 2'>
        <Box margin='small' pad='large' align='center' background='accent-2'>
          <TreeOption size='xlarge' />
        </Box>
      </Tab>
      <Tab title='Tab 3'>
        <Box margin='small' pad='large' align='center' background='accent-3'>
          <Car size='xlarge' />
        </Box>
      </Tab>
    </Tabs>
  </Grommet>
);

class ControlledTabs extends Component {
  state = {}

  onActive = index => this.setState({ index })

  render() {
    const { index } = this.state;
    return (
      <Grommet theme={grommet}>
        <Tabs activeIndex={index} onActive={this.onActive}>
          <Tab title='Tab 1'>
            <Box margin='small' pad='large' align='center' background='accent-1'>
              <Attraction size='xlarge' />
            </Box>
          </Tab>
          <Tab title='Tab 2'>
            <Box margin='small' pad='large' align='center' background='accent-2'>
              <TreeOption size='xlarge' />
            </Box>
          </Tab>
          <Tab title='Tab 3'>
            <Box margin='small' pad='large' align='center' background='accent-3'>
              <Car size='xlarge' />
            </Box>
          </Tab>
        </Tabs>
      </Grommet>
    );
  }
}

const RichTabTitle = ({ icon, label }) => (
  <Box direction='row' align='center' gap='xsmall' margin='xsmall'>
    {icon}
    <Text size='small'>
      <strong>{label}</strong>
    </Text>
  </Box>
);

const RichTabs = () => (
  <Grommet theme={grommet}>
    <Tabs>
      <Tab title={<RichTabTitle icon={<CircleInformation color='accent-1' />} label='Personal Data' />}>
        <FormField label='Name'>
          <TextInput placeholder='Enter your name...' />
        </FormField>
      </Tab>
      <Tab title={<RichTabTitle icon={<Currency color='neutral-5' />} label='Payment' />}>
        <FormField label='Card Number'>
          <TextInput placeholder='Enter your card number...' />
        </FormField>
      </Tab>
    </Tabs>
  </Grommet>
);

storiesOf('Tabs', module)
  .add('Uncontrolled Tabs', () => <UncontrolledTabs />)
  .add('Controlled Tabs', () => <ControlledTabs />)
  .add('Rich Tabs', () => <RichTabs />);
