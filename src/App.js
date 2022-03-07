/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Welcome from './pages/Welcome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn';
import utils from '../tailwind.json';
import Register from './pages/Register';
import Register2 from './pages/Register2';
import Congratulations from './pages/Register3';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignIn2 from './pages/SignIn2';
import InstitutionList from './pages/InstitutionList';
import Photos from './pages/Photos';
import NewSession from './pages/NewSession';
import Session from './pages/Session';
import SessionList from './pages/SessionList';
import SessionSupervisor from './pages/SessionSupervisor';
import IncidentsTerms from './pages/IncidentsTerms';
import IncidentReport from './pages/IncidentReport';
import Audio from './pages/Audio';
import AudioPlaylist from './pages/AudioPlaylist';
import RelatedRubric from './pages/RelatedRubric';
import Rubric from './pages/Rubric';
import Text from './pages/Text';
import TextMenu from './pages/Text';
import Tags from './pages/Tags';
import Rubric1 from './pages/Rubric1';
import RubricDetail from './pages/RubricDetail';
import RubricText from './pages/RubricText';
import RubricPhotos from './pages/RubricPhotos';
import RubricAudio from './pages/RubricAudio';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            title: 'Welcome',
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register2"
          component={RegisterPersonalInformationScreen}
          options={{
            title: 'Register',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register3"
          component={RegisterCongratulationsScreen}
          options={{
            title: 'Register',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn1"
          component={SignInScreen1}
          options={{
            title: 'Sign In',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn2"
          component={SignInScreen2}
          options={{
            title: 'Sign In',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Institution List"
          component={InstitutionListScreen}
          options={{
            title: 'Institution List',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Photos"
          component={PhotosScreen}
          options={{
            title: 'Photos',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="New Session"
          component={NewSessionScreen}
          options={{
            title: 'New Session',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Session"
          component={SessionScreen}
          options={{
            title: 'Session',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Session List"
          component={SessionListScreen}
          options={{
            title: 'Session List',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Session Supervisor"
          component={SessionSupervisorScreen}
          options={{
            title: 'Session Supervisor',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Incidents Terms"
          component={IncidentTermsScreen}
          options={{
            title: 'Incidents Terms',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Incident Report"
          component={IncidentReportScreen}
          options={{
            title: 'Incident Repor',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Audio"
          component={AudioScreen}
          options={{
            title: 'Audio',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Audio Playlist"
          component={AudioPlaylistScreen}
          options={{
            title: 'Audio Playlist',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Related Rubric"
          component={RelatedRubricScreen}
          options={{
            title: 'Related Rubric',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rubric"
          component={RubricScreen}
          options={{
            title: 'Rubric',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Text"
          component={TextScreen}
          options={{
            title: 'Text',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tags"
          component={TagsScreen}
          options={{
            title: 'Tags',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rubric 1"
          component={Rubric1Screen}
          options={{
            title: 'Rubric 1',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rubric Details"
          component={RubricDetailScreen}
          options={{
            title: 'Rubric Details',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rubric Text"
          component={RubricTextScreen}
          options={{
            title: 'Rubric Text',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rubric Photos"
          component={RubricPhotosScreen}
          options={{
            title: 'Rubric Photos',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rubric Audio"
          component={RubricAudioScreen}
          options={{
            title: 'Rubric Audio',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const WelcomeScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Welcome />
    </TailwindProvider>
  );
};

const RegisterScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Register />
    </TailwindProvider>
  );
};

const RegisterPersonalInformationScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Register2 />
    </TailwindProvider>
  );
};

const RegisterCongratulationsScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Congratulations />
    </TailwindProvider>
  );
};

const DashboardScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Dashboard />
    </TailwindProvider>
  );
};

const SignInScreen1 = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SignIn />
    </TailwindProvider>
  );
};

const SignInScreen2 = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SignIn2 />
    </TailwindProvider>
  );
};

const InstitutionListScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <InstitutionList />
    </TailwindProvider>
  );
};

const PhotosScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Photos />
    </TailwindProvider>
  );
};

const NewSessionScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <NewSession />
    </TailwindProvider>
  );
};

const SessionScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Session />
    </TailwindProvider>
  );
};

const SessionListScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SessionList />
    </TailwindProvider>
  );
};

const SessionSupervisorScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <SessionSupervisor />
    </TailwindProvider>
  );
};

const IncidentTermsScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <IncidentsTerms />
    </TailwindProvider>
  );
};

const IncidentReportScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <IncidentReport />
    </TailwindProvider>
  );
};

const AudioScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Audio />
    </TailwindProvider>
  );
};

const AudioPlaylistScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <AudioPlaylist />
    </TailwindProvider>
  );
};

const RelatedRubricScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RelatedRubric />
    </TailwindProvider>
  );
};

const RubricScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Rubric />
    </TailwindProvider>
  );
};

const TextScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <TextMenu />
    </TailwindProvider>
  );
};

const TagsScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Tags />
    </TailwindProvider>
  );
};

const Rubric1Screen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Rubric1 />
    </TailwindProvider>
  );
};

const RubricDetailScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricDetail />
    </TailwindProvider>
  );
};

const RubricTextScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricText />
    </TailwindProvider>
  );
};

const RubricPhotosScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricPhotos />
    </TailwindProvider>
  );
};

const RubricAudioScreen = () => {
  return (
    <TailwindProvider utilities={utils}>
      <RubricAudio />
    </TailwindProvider>
  );
};

export default App;
