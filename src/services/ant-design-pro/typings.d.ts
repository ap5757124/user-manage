// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {

    // create table `user-manage-dev`.user
    // (
    //   id           bigint auto_increment comment '主键'
    // primary key,
    // username     varchar(256)                       null comment '用户昵称',
    // userAccount  varchar(256)                       null comment '账号',
    // avatarUrl    varchar(1024)                      null comment '用户头像',
    // gender       tinyint                            null comment '性别',
    // userPassword varchar(512)                       not null comment '密码',
    // phone        varchar(128)                       null comment '电话',
    // email        varchar(512)                       null comment '邮箱',
    // userStatus   int      default 0                 not null comment '状态 0 正常',
    // createTime   datetime default CURRENT_TIMESTAMP null comment '创建时间',
    // updateTime   datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '更新时间',
    // isDelete     tinyint  default 0                 not null comment '是否删除',
    // userRole     int      default 0                 not null comment '普通用户 - 0  管理员 - 1'
    // )
    // comment '用户表';

    id?: number,
    username?: string,
    userAccount?: string,
    avatarUrl?: string,
    gender?: number,
    userPassword?: string,
    phone?: string,
    email?: string,
    userStatus?: number,
    createTime?: Date,
    updateTime?: Date,
    isDelete?: number,
    userRole?: number,

    // name?: string;
    // avatar?: string;
    // userid?: string;
    // email?: string;
    // signature?: string;
    // title?: string;
    // group?: string;
    // tags?: { key?: string; label?: string }[];
    // notifyCount?: number;
    // unreadCount?: number;
    // country?: string;
    // access?: string;
    // geographic?: {
    //   province?: { label?: string; key?: string };
    //   city?: { label?: string; key?: string };
    // };
    // address?: string;
    // phone?: string;

  };

  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  }

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    // username?: string;
    // password?: string;
    // autoLogin?: boolean;
    // type?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type RegisterParams = {
    // username?: string;
    // password?: string;
    // autoLogin?: boolean;
    // type?: string;
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };


  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
