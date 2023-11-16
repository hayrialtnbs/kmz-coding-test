import React, {Component} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {activeMenu} from '../../../Navigation/MainScreens';
import DrawerMenuItem from '../Components/DrawerMenuItem.component';

class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  state = {};

  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={activeMenu}
          keyExtractor={(_, __) => __.toString()}
          renderItem={({item, index}) => (
            <>
            <DrawerMenuItem
              index={index}
              item={item}
              route={item.route}
              goBack={item.goBack}
              forceUp={this.forceUpdateHandler}
              subData={item.children}
              title={item.title}
              icon={item.icon}
              pack={item.pack}
              {...this.props}
            />
            </>

          )}
        />
      </SafeAreaView>
    );
  }
}
export default observer(DrawerMenu);
