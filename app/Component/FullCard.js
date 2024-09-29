import {
  Pressable,
  StyleSheet,
  Text,
  Share,
  View,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import * as React from "react";

import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

import AppIcon from "./AppIcon";
import Colors from "../Shares/Colors";

const { width, height } = Dimensions.get("screen");

const FullCard = ({ cardStyle, videoSource, videoStyle }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [likeCount, setLikeCount] = React.useState(0); // Added state for like count
  const [isLiked, setIsLiked] = React.useState(false);
  const [showComments, setShowComments] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");

  const handleSharePress = async () => {
    try {
      const shareOptions = {
        message: "Check out this video!", // Message to be shared
        url: "https://example.com/video", // URL of the video or any link you want to share
      };

      const result = await Share.share(shareOptions);

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared via activity type
          console.log(`Shared via ${result.activityType}`);
        } else {
          // Shared
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
      Alert.alert("Error", "Could not share the video. Please try again.");
    }
  };

  const handleLikePress = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleCommentSubmit = () => {
    // Add the new comment to the comments array
    setComments([...comments, newComment]);
    // Clear the input field
    setNewComment("");
  };
  return (
    <View style={cardStyle}>
      <Video
        ref={video}
        useNativeControls
        style={videoStyle}
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlayBackStatusUpdate={(status) => setStatus(() => status)}
        source={videoSource}
        autoplay
      ></Video>
      <View style={styles.subVideo}>
        <View style={styles.likeContainer}>
          <Pressable style={styles.iconStyle} onPress={handleLikePress}>
            <AppIcon
              name={"thumbs-up"}
              size={30}
              color={isLiked ? Colors.royalblue : Colors.purewhite}
            />
          </Pressable>
          <Text style={styles.likeCountText}>{likeCount}</Text>
        </View>
        <Pressable style={styles.iconStyle} onPress={handleSharePress}>
          <AppIcon name={"share"} size={30} color={Colors.purewhite} />
        </Pressable>
        <Pressable style={styles.iconStyle} onPress={toggleComments}>
          <AppIcon name={"comment"} size={30} color={Colors.purewhite} />
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showComments}
        onRequestClose={toggleComments}
        style={styles.modal}
      >
        <View style={styles.commentModal}>
          <ScrollView style={styles.commentScrollView}>
            {comments.map((comment, index) => (
              <Text key={index} style={styles.commentText}>
                {comment}
              </Text>
            ))}
          </ScrollView>
          <View style={styles.inputStyle}>
            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment..."
              value={newComment}
              onChangeText={(text) => setNewComment(text)}
            />
            <Pressable onPress={handleCommentSubmit}>
              <Ionicons name="send" size={24} color="black" />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  subVideo: {
    right: 0,
    position: "absolute",
    bottom: 0,
    margin: 10,
  },
  iconStyle: {
    marginBottom: 20,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeCountText: {
    position: "absolute",
    marginLeft: 15,
    fontSize: 16,
    bottom: 40,
    color: Colors.purewhite,
  },
  inputStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  commentModal: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.purewhite,
  },
  commentText: {
    fontSize: 18,
    marginBottom: 10,
  },
  commentInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: 300,
  },
  commentScrollView: {
    flex: 1,
    marginBottom: 10,
  },
  modal: {
    height: height / 2,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
export default FullCard;
