import React from 'react';
import PropTypes from 'prop-types';
import Add from 'material-ui-icons/Add';
import ArrowDownward from 'material-ui-icons/ArrowDownward';
import ArrowDropRight from 'material-ui-icons/SubdirectoryArrowRight';
import ArrowUpward from 'material-ui-icons/ArrowUpward';
import Business from 'material-ui-icons/Business';
import Cancel from 'material-ui-icons/Cancel';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import ChevronRight from 'material-ui-icons/ChevronRight';
import Clear from 'material-ui-icons/Clear';
import Close from 'material-ui-icons/Close';
import Create from 'material-ui-icons/Create';
import Delete from 'material-ui-icons/Delete';
import Description from 'material-ui-icons/Description';
import Done from 'material-ui-icons/Done';
import DragHandle from 'material-ui-icons/DragHandle';
import Email from 'material-ui-icons/Email';
import Extension from 'material-ui-icons/Extension';
import FontDownload from 'material-ui-icons/FontDownload';
import Group from 'material-ui-icons/Group';
import GridOn from 'material-ui-icons/GridOn';
import InfoOutline from 'material-ui-icons/InfoOutline';
import InsertChart from 'material-ui-icons/InsertChart';
import List from 'material-ui-icons/List';
import Launch from 'material-ui-icons/Launch';
import Message from 'material-ui-icons/Message';
import MoreVert from 'material-ui-icons/MoreVert';
import NotInterested from 'material-ui-icons/NotInterested';
import Person from 'material-ui-icons/Person';
import Public from 'material-ui-icons/Public';
import Reply from 'material-ui-icons/Reply';
import Room from 'material-ui-icons/Room';
import Search from 'material-ui-icons/Search';
import ShowChart from 'material-ui-icons/ShowChart';
import Star from 'material-ui-icons/Star';
import StarBorder from 'material-ui-icons/StarBorder';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ViewList from 'material-ui-icons/ViewList';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import SentimentDissatisfied from 'material-ui-icons/SentimentDissatisfied';
import MUISvgIcon from 'material-ui/SvgIcon';
import grey from 'material-ui/colors/grey';
const grey600 = grey['600'];
const grey200 = grey['200'];

const icons = {
    Add,
    ArrowDownward,
    ArrowDropRight,
    ArrowUpward,
    Business,
    Cancel,
    ChevronLeft,
    ChevronRight,
    Clear,
    Close,
    Create,
    Delete,
    Description,
    Done,
    DragHandle,
    Email,
    Extension,
    FontDownload,
    GridOn,
    Group,
    InfoOutline,
    InsertChart,
    List,
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
};

const SvgIcon = ({ icon, children, className, disabled, style }) => {
    let Icon = null;
    if (children && !icons[icon]) {
        Icon = MUISvgIcon;
    } else {
        Icon = icons[icon] || SentimentDissatisfied;
    }

    return (
        <Icon
            className={className}
            style={{
                ...style,
                fill: style.fill || (disabled ? grey200 : grey600),
            }}
        >
            {children}
        </Icon>
    );
};

SvgIcon.propTypes = {
    /**
     * Name of the material icon to render
     */
    icon: PropTypes.string,

    /**
     * A node representing a custom svg
     */
    children: PropTypes.node,

    /**
     * The class name to apply to the component
     */
    className: PropTypes.string,

    /**
     * Whether icon should have a disabled look
     */
    disabled: PropTypes.bool,

    /**
     * Pass inline styles to the root element
     */
    style: PropTypes.object,
};

SvgIcon.defaultProps = {
    icon: '',
    children: null,
    className: '',
    disabled: false,
    style: {},
};

export default SvgIcon;
