import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { expect } from '@jest/globals';
import App from './App';

const AppComponent = () => (
  <MockedProvider mocks={[]}>
    <App />
  </MockedProvider>
);

describe('<App />', () => {
  it('has 1 root child', () => {
    const tree: ReactTestRendererJSON = renderer
      .create(<AppComponent />)
      .toJSON() as ReactTestRendererJSON;

    expect(tree?.children?.length).toBe(1);
  });

  it('should display correctly', () => {
    const tree: ReactTestRendererJSON = renderer
      .create(<AppComponent />)
      .toJSON() as ReactTestRendererJSON;

    expect(tree).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "backgroundColor": "#F3F9FC",
            "flex": 1,
            "paddingTop": 0,
          }
        }
      >
        <RNCSafeAreaProvider
          onInsetsChange={[Function]}
          style={
            Array [
              Object {
                "flex": 1,
              },
              undefined,
            ]
          }
        >
          <RNSScreenNavigationContainer
            style={
              Object {
                "flex": 1,
                "overflow": "hidden",
              }
            }
          >
            <RNSScreen
              activityState={2}
              collapsable={false}
              forwardedRef={[Function]}
              style={
                Object {
                  "bottom": 0,
                  "left": 0,
                  "position": "absolute",
                  "right": 0,
                  "top": 0,
                  "zIndex": 0,
                }
              }
            >
              <View
                accessibilityElementsHidden={false}
                importantForAccessibility="auto"
                style={
                  Array [
                    Object {
                      "backgroundColor": "rgb(242, 242, 242)",
                      "flex": 1,
                    },
                    Array [
                      Object {
                        "flex": 1,
                        "flexDirection": "column-reverse",
                      },
                      undefined,
                    ],
                  ]
                }
              >
                <View
                  style={
                    Object {
                      "flex": 1,
                    }
                  }
                >
                  <View
                    style={
                      Array [
                        Object {
                          "flex": 1,
                        },
                        undefined,
                      ]
                    }
                  >
                    <RNSScreenStack
                      style={
                        Object {
                          "flex": 1,
                        }
                      }
                    >
                      <RNSScreen
                        collapsable={false}
                        forwardedRef={[Function]}
                        onAppear={[Function]}
                        onDisappear={[Function]}
                        onDismissed={[Function]}
                        onTransitionProgress={[Function]}
                        onWillDisappear={[Function]}
                        replaceAnimation="push"
                        stackPresentation="push"
                        style={
                          Object {
                            "bottom": 0,
                            "left": 0,
                            "position": "absolute",
                            "right": 0,
                            "top": 0,
                          }
                        }
                      >
                        <RNSScreenStackHeaderConfig
                          backButtonInCustomView={false}
                          backgroundColor="rgb(255, 255, 255)"
                          color="rgb(0, 122, 255)"
                          direction="ltr"
                          disableBackButtonMenu={false}
                          hidden={true}
                          hideBackButton={false}
                          largeTitleHideShadow={false}
                          title="StoreHome"
                          titleColor="rgb(28, 28, 30)"
                          topInsetEnabled={false}
                          translucent={false}
                        />
                        <View
                          style={
                            Array [
                              Object {
                                "flex": 1,
                              },
                              Object {
                                "backgroundColor": "rgb(242, 242, 242)",
                              },
                              undefined,
                            ]
                          }
                        >
                          <View
                            style={
                              Object {
                                "backgroundColor": "#F3F9FC",
                                "flex": 1,
                                "paddingHorizontal": 20,
                                "width": "100%",
                              }
                            }
                          >
                            <Text
                              style={
                                Object {
                                  "fontSize": 32,
                                  "fontWeight": "bold",
                                  "marginHorizontal": 10,
                                  "marginVertical": 12,
                                }
                              }
                            >
                              Stores
                            </Text>
                            <View
                              style={
                                Array [
                                  Object {
                                    "overflow": "scroll",
                                    "width": "100%",
                                  },
                                  Object {
                                    "height": 1174,
                                  },
                                ]
                              }
                            >
                              <RCTScrollView
                                getItem={[Function]}
                                getItemCount={[Function]}
                                keyExtractor={[Function]}
                                onContentSizeChange={[Function]}
                                onLayout={[Function]}
                                onMomentumScrollBegin={[Function]}
                                onMomentumScrollEnd={[Function]}
                                onScroll={[Function]}
                                onScrollBeginDrag={[Function]}
                                onScrollEndDrag={[Function]}
                                removeClippedSubviews={false}
                                renderItem={[Function]}
                                scrollEventThrottle={50}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                stickyHeaderIndices={Array []}
                                viewabilityConfigCallbackPairs={Array []}
                              >
                                <View />
                              </RCTScrollView>
                            </View>
                            <Modal
                              animationType="none"
                              deviceHeight={null}
                              deviceWidth={null}
                              hardwareAccelerated={false}
                              hideModalContentWhileAnimating={false}
                              onBackdropPress={[Function]}
                              onModalHide={[Function]}
                              onModalWillHide={[Function]}
                              onModalWillShow={[Function]}
                              onRequestClose={[Function]}
                              panResponderThreshold={4}
                              scrollHorizontal={false}
                              scrollOffset={0}
                              scrollOffsetMax={0}
                              scrollTo={null}
                              supportedOrientations={
                                Array [
                                  "portrait",
                                  "landscape",
                                ]
                              }
                              swipeThreshold={100}
                              transparent={true}
                              visible={false}
                            />
                            <View
                              accessible={true}
                              collapsable={false}
                              focusable={true}
                              onClick={[Function]}
                              onResponderGrant={[Function]}
                              onResponderMove={[Function]}
                              onResponderRelease={[Function]}
                              onResponderTerminate={[Function]}
                              onResponderTerminationRequest={[Function]}
                              onStartShouldSetResponder={[Function]}
                              style={
                                Object {
                                  "alignItems": "center",
                                  "backgroundColor": "#0DBB89",
                                  "borderRadius": 25,
                                  "bottom": 90,
                                  "display": "flex",
                                  "height": 50,
                                  "justifyContent": "center",
                                  "opacity": 1,
                                  "position": "absolute",
                                  "right": 20,
                                  "width": 50,
                                }
                              }
                              testID="FAB"
                            >
                              <View
                                color="#F3F9FC"
                                name="add-outline"
                                size={40}
                              />
                            </View>
                          </View>
                        </View>
                      </RNSScreen>
                    </RNSScreenStack>
                  </View>
                </View>
              </View>
            </RNSScreen>
          </RNSScreenNavigationContainer>
          <View
            collapsable={false}
            onLayout={[Function]}
            pointerEvents="auto"
            style={
              Object {
                "backgroundColor": "#333333",
                "borderTopColor": "rgb(216, 216, 216)",
                "borderTopLeftRadius": 35,
                "borderTopRightRadius": 35,
                "borderTopWidth": 0.5,
                "bottom": 0,
                "elevation": 8,
                "height": 70,
                "left": 0,
                "padding": 10,
                "paddingBottom": 0,
                "paddingHorizontal": 0,
                "position": "absolute",
                "right": 0,
                "transform": Array [
                  Object {
                    "translateY": 0,
                  },
                ],
              }
            }
          >
            <View
              pointerEvents="none"
              style={
                Object {
                  "bottom": 0,
                  "left": 0,
                  "position": "absolute",
                  "right": 0,
                  "top": 0,
                }
              }
            >
              <View
                style={
                  Array [
                    Object {
                      "backgroundColor": "transparent",
                    },
                    undefined,
                  ]
                }
              >
                <ViewManagerAdapter_ExpoBlurView
                  proxiedProperties={
                    Object {
                      "intensity": 100,
                      "tint": "light",
                    }
                  }
                  style={
                    Object {
                      "bottom": 0,
                      "left": 0,
                      "position": "absolute",
                      "right": 0,
                      "top": 0,
                    }
                  }
                />
              </View>
            </View>
            <View
              accessibilityRole="tablist"
              style={
                Object {
                  "flex": 1,
                  "flexDirection": "row",
                }
              }
            >
              <View
                accessibilityLabel="Store, tab, 1 of 3"
                accessibilityRole="button"
                accessibilityState={
                  Object {
                    "selected": true,
                  }
                }
                accessibilityStates={
                  Array [
                    "selected",
                  ]
                }
                accessible={true}
                collapsable={false}
                focusable={true}
                onBlur={[Function]}
                onClick={[Function]}
                onFocus={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Array [
                    Object {
                      "alignItems": "center",
                      "flex": 1,
                    },
                    Object {
                      "backgroundColor": "transparent",
                    },
                    Object {
                      "flexDirection": "column",
                      "justifyContent": "flex-end",
                    },
                    undefined,
                  ]
                }
              >
                <View
                  style={
                    Array [
                      Object {
                        "flex": 1,
                      },
                      undefined,
                    ]
                  }
                >
                  <View
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "alignSelf": "center",
                          "height": "100%",
                          "justifyContent": "center",
                          "minWidth": 25,
                          "position": "absolute",
                          "width": "100%",
                        },
                        Object {
                          "opacity": 1,
                        },
                      ]
                    }
                  >
                    <View
                      color="#0DBB89"
                      name="apps"
                      size={25}
                    />
                  </View>
                  <View
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "alignSelf": "center",
                          "height": "100%",
                          "justifyContent": "center",
                          "minWidth": 25,
                          "position": "absolute",
                          "width": "100%",
                        },
                        Object {
                          "opacity": 0,
                        },
                      ]
                    }
                  >
                    <View
                      color="#828382"
                      name="apps-outline"
                      size={25}
                    />
                  </View>
                </View>
                <Text
                  numberOfLines={1}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "textAlign": "center",
                      },
                      Object {
                        "color": "#0DBB89",
                      },
                      Object {
                        "fontSize": 10,
                      },
                      Object {
                        "fontSize": 12,
                        "marginBottom": 10,
                        "marginTop": -5,
                      },
                    ]
                  }
                >
                  Store
                </Text>
              </View>
              <View
                accessibilityLabel="Search, tab, 2 of 3"
                accessibilityRole="button"
                accessibilityState={
                  Object {
                    "selected": false,
                  }
                }
                accessibilityStates={Array []}
                accessible={true}
                collapsable={false}
                focusable={true}
                onBlur={[Function]}
                onClick={[Function]}
                onFocus={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Array [
                    Object {
                      "alignItems": "center",
                      "flex": 1,
                    },
                    Object {
                      "backgroundColor": "transparent",
                    },
                    Object {
                      "flexDirection": "column",
                      "justifyContent": "flex-end",
                    },
                    undefined,
                  ]
                }
              >
                <View
                  style={
                    Array [
                      Object {
                        "flex": 1,
                      },
                      undefined,
                    ]
                  }
                >
                  <View
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "alignSelf": "center",
                          "height": "100%",
                          "justifyContent": "center",
                          "minWidth": 25,
                          "position": "absolute",
                          "width": "100%",
                        },
                        Object {
                          "opacity": 0,
                        },
                      ]
                    }
                  >
                    <View
                      color="#0DBB89"
                      name="search"
                      size={25}
                    />
                  </View>
                  <View
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "alignSelf": "center",
                          "height": "100%",
                          "justifyContent": "center",
                          "minWidth": 25,
                          "position": "absolute",
                          "width": "100%",
                        },
                        Object {
                          "opacity": 1,
                        },
                      ]
                    }
                  >
                    <View
                      color="#828382"
                      name="search-outline"
                      size={25}
                    />
                  </View>
                </View>
                <Text
                  numberOfLines={1}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "textAlign": "center",
                      },
                      Object {
                        "color": "#828382",
                      },
                      Object {
                        "fontSize": 10,
                      },
                      Object {
                        "fontSize": 12,
                        "marginBottom": 10,
                        "marginTop": -5,
                      },
                    ]
                  }
                >
                  Search
                </Text>
              </View>
              <View
                accessibilityLabel="Cart, tab, 3 of 3"
                accessibilityRole="button"
                accessibilityState={
                  Object {
                    "selected": false,
                  }
                }
                accessibilityStates={Array []}
                accessible={true}
                collapsable={false}
                focusable={true}
                onBlur={[Function]}
                onClick={[Function]}
                onFocus={[Function]}
                onResponderGrant={[Function]}
                onResponderMove={[Function]}
                onResponderRelease={[Function]}
                onResponderTerminate={[Function]}
                onResponderTerminationRequest={[Function]}
                onStartShouldSetResponder={[Function]}
                style={
                  Array [
                    Object {
                      "alignItems": "center",
                      "flex": 1,
                    },
                    Object {
                      "backgroundColor": "transparent",
                    },
                    Object {
                      "flexDirection": "column",
                      "justifyContent": "flex-end",
                    },
                    undefined,
                  ]
                }
              >
                <View
                  style={
                    Array [
                      Object {
                        "flex": 1,
                      },
                      undefined,
                    ]
                  }
                >
                  <View
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "alignSelf": "center",
                          "height": "100%",
                          "justifyContent": "center",
                          "minWidth": 25,
                          "position": "absolute",
                          "width": "100%",
                        },
                        Object {
                          "opacity": 0,
                        },
                      ]
                    }
                  >
                    <View
                      color="#0DBB89"
                      name="cart"
                      size={25}
                    />
                  </View>
                  <View
                    style={
                      Array [
                        Object {
                          "alignItems": "center",
                          "alignSelf": "center",
                          "height": "100%",
                          "justifyContent": "center",
                          "minWidth": 25,
                          "position": "absolute",
                          "width": "100%",
                        },
                        Object {
                          "opacity": 1,
                        },
                      ]
                    }
                  >
                    <View
                      color="#828382"
                      name="cart-outline"
                      size={25}
                    />
                  </View>
                </View>
                <Text
                  numberOfLines={1}
                  style={
                    Array [
                      Object {
                        "backgroundColor": "transparent",
                        "textAlign": "center",
                      },
                      Object {
                        "color": "#828382",
                      },
                      Object {
                        "fontSize": 10,
                      },
                      Object {
                        "fontSize": 12,
                        "marginBottom": 10,
                        "marginTop": -5,
                      },
                    ]
                  }
                >
                  Cart
                </Text>
              </View>
            </View>
          </View>
        </RNCSafeAreaProvider>
      </View>
    `);
  });
});
