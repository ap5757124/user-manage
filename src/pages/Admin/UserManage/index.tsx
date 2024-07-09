import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import {Button, Dropdown, Image, Space, Tag} from 'antd';
import { useRef } from 'react';
import request from 'umi-request';
import {getUserSearch} from "@/services/ant-design-pro/api";
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type GithubIssueItem = {
  // url: string;
  // id: number;
  // number: number;
  // title: string;
  // labels: {
  //   name: string;
  //   color: string;
  // }[];
  // state: string;
  // comments: number;
  // created_at: string;
  // updated_at: string;
  // closed_at?: string;

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
};

const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户昵称',
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: '账号',
    dataIndex: 'userAccount',
    ellipsis: true,
  },
  {
    title: '用户头像',
    dataIndex: 'avatarUrl',
    search: false,
    render: (_, record) => {
      return <Image src={record.avatarUrl} width={100}></Image>
    }
  },
  {
    title: '性别',
    dataIndex: 'gender',
    valueType: 'select',
    valueEnum: {
      0: {
        text: '男'
      },
      1: {
        text: '女'
      }
    }
  },
  {
    title: '电话',
    dataIndex: 'phone',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueEnum: {
      0: {
        text: '普通角色'
      },
      1: {
        text: '管理员'
      }
    }
  },


  // {
  //   disable: true,
  //   title: '标签',
  //   dataIndex: 'labels',
  //   search: false,
  //   renderFormItem: (_, { defaultRender }) => {
  //     return defaultRender(_);
  //   },
  //   render: (_, record) => (
  //     <Space>
  //       {record.labels.map(({ name, color }) => (
  //         <Tag color={color} key={name}>
  //           {name}
  //         </Tag>
  //       ))}
  //     </Space>
  //   ),
  // },

  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        // await waitTime(2000);
        const tableData = await getUserSearch();
        return {
          data: tableData
        }
        // request<{
        //   data: GithubIssueItem[];
        // }>('https://proapi.azurewebsites.net/github/issues', {
        //   params,
        // });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  );
};
