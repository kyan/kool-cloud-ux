import React from "react";
import { Table, Popup } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';

export default function ProjectTableRow ({ actions, project, users }) {

    const createActionIcon = (can, key, action, icon, tooltip ) => 
                  (can &&
                    <a key={key} href="/#" onClick={ action }><Popup
                      
                      trigger={<i className={ `id icon ${icon}` }></i>}
                      content={tooltip}
                    /></a>
                  );

    const rightsIcons = (rights, actions) => 
            ([
              createActionIcon( 
                rights.canReadProject,
                'keyReadProject', 
                actions.view,
                'eye',
                'view project'),
              createActionIcon(
                rights.canEditProject,
                'keyEditProject', 
                actions.edit,
                'edit',
                'edit project'), 
              createActionIcon(
                rights.canCreateShots,
                'keyCreateShots', 
                actions.edit,
                'video',
                'create shot')
            ]);
    return(
      <Table.Row>
        <Table.Cell ><FadeIn>{project.title}</FadeIn></Table.Cell>
        <Table.Cell><FadeIn><i>{ project.owner }</i></FadeIn></Table.Cell>
        <Table.Cell><FadeIn>{project.description}</FadeIn></Table.Cell>
        <Table.Cell><FadeIn>{project.status}</FadeIn></Table.Cell>
        <Table.Cell>
          {rightsIcons(project.rights, actions)}
          </Table.Cell>
      </Table.Row>
    )
}

