import React from 'react';
import PropTypes from 'prop-types';
import { grey600, grey200 } from 'material-ui/styles/colors';
import MuiSvgIcon from 'material-ui/SvgIcon';
import { Add, Alarm, ArrowDownward, ArrowUpward, Business, Cancel, ChevronLeft, ChevronRight, Close, Create, CropFree,
    Delete, Description, Done, DragHandle, Email, Extension, Face, Fingerprint, FontDownload, GridOn, Group, InfoOutline, InsertChart,
    Launch, Message, MoreVert, NotInterested, Person, Public, Reply, Room, Search, ShowChart, Star, StarBorder,
    SentimentDissatisfied, ThumbUp, ViewList, Visibility, VisibilityOff, List } from 'material-ui-icons';

const iconAlternatives = {
    Add,
    Alarm,
    ArrowDownward,
    ArrowUpward,
    Business,
    Cancel,
    ChevronLeft,
    ChevronRight,
    Close,
    Create,
    CropFree,
    Delete,
    Description,
    Done,
    DragHandle,
    Email,
    Extension,
    Face,
    Fingerprint,
    FontDownload,
    GridOn,
    Group,
    InfoOutline,
    InsertChart,
    Launch,
    Message,
    MoreVert,
    NotInterested,
    Person,
    Public,
    Reply,
    Room,
    Search,
    ShowChart,
    Star,
    StarBorder,
    ThumbUp,
    ViewList,
    Visibility,
    VisibilityOff,
    List,
};

const SvgIcon = (props) => {
    const { disabled, icon, ...passThroughProps } = props;
    let Icon = null;

    if (props.children && !iconAlternatives[icon]) {
        Icon = MuiSvgIcon;
    } else {
        Icon = iconAlternatives[icon] || SentimentDissatisfied;
    }
<<<<<<< HEAD
=======
    console.log(props);
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    return (
        <Icon
            style={{
                ...props.style,
                fill: props.style || (disabled ? grey200 : grey600) }}
            {...passThroughProps}
        >
            {props.children}
        </Icon>
    );
};

SvgIcon.propTypes = {
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,

};

SvgIcon.defaultProps = {
    disabled: false,
    icon: undefined,
    children: undefined,
    style: undefined,
};

export default SvgIcon;