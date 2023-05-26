import React from 'react'

export default function Access() {
  return (
    <div>
    
<div className="grid grid-cols-3 gap-1">
  <div className="flex flex-col">
    <label htmlFor="title" className="font-medium mb-0">Titre</label>
    <input
//   defaultValue={tickets.title}
  type="text"
  id="title"
  name="title"
  className="border rounded-lg py-2 px-3"
//   onChange={handleTitleChange}
/>
  </div>
  {/* <div className="flex flex-col">
    <label htmlFor="team" className="font-medium mb-0">Équipe</label>
    <select
  id="team"
  name="team"
  className="border rounded-lg py-2 px-3"
  value={teamId}
  onChange={handleTeamChange}>
    <option value={tickets.team && tickets.team.id}>{tickets.team && tickets.team.title}</option>

  {teams.map((team) => (
    <option key={team.id} value={team.id}>
      {team && team.title}
    </option>
  ))}
</select>

  </div> */}
  {/* <div className="flex flex-col">
    <label htmlFor="assigne" className="font-medium mb-0">Assigné à</label>
    <select onChange={handleAssigned_toChange}  id="assigned_to" name="assigned_to" className="border rounded-lg py-2 px-3">
  <option value={tickets.assigned_to && tickets.assigned_to.name}>{tickets.assigned_to && tickets.assigned_to.name}</option>
  {admins.map((admin) => (
    <option key={admin.id} value={admin.id}>{admin.name}</option>
  ))}
</select>

  </div> */}
  <div className="flex flex-col">
    <label htmlFor="priorite" className="font-medium mb-0">Priorité</label>
    <select  id="priorite" name="priorite" className="border rounded-lg py-2 px-3">
      <option  >tickets.priority && tickets.priority</option>
      <option value="Priorité moyenne">Priorité moyenne </option>
    <option value="Priorité élevée">Priorité élevée</option>
    <option value="Urgent">Urgent</option>
    </select>
  </div>
  <div className="flex flex-col">
    <label htmlFor="type" className="font-medium mb-0">Type</label>
    <select id="type" name="type" className="border rounded-lg py-2 px-3">
    {/* <option value={tickets.type}>{tickets.type}</option> */}
    <option value="Incident">Incident</option>
    <option value="Question">Question</option>
    </select>
  </div>
 
  <div className="flex flex-col">
    <label htmlFor="etiquettes" className="font-medium mb-0">Étiquettes</label>
    {/* <input onChange={handleTagChange} defaultValue={tickets.tag} placeholder='#TAG'  type="text" id="etiquettes" name="etiquettes" className="border rounded-lg py-2 px-3"/> */}
  </div>
  <div className="flex flex-col">
  <div className="flex flex-col">
    <label htmlFor="client" className="font-medium mb-0">Client</label>
    {/* <input disabled defaultValue={tickets.user_details && tickets.user_details.name} type="text" id="client" name="client" className="border rounded-lg py-2 px-3"/> */}
  </div>
</div>
  <div className="flex flex-col">
    <label htmlFor="email" className="font-medium mb-0">Email</label>
    {/* <input disabled defaultValue={tickets.email} type="email" id="email" name="email" className="border rounded-lg py-2 px-3"/> */}
  </div>

  <div className="flex flex-col">
    <label htmlFor="telephone" className="font-medium mb-0">Téléphone</label>
    {/* <input disabled defaultValue={tickets.phone} type="tel" id="telephone" name="telephone" className="border rounded-lg py-2 px-3"/> */}
  </div>



<div className="flex flex-col col-span-2">
    <label htmlFor="description" className="font-medium mb-0">Description</label>
<textarea  
  id="description"
  name="description"
  className="border rounded-lg py-2 px-3 resize-none"
  rows="8"
  cols="90"
></textarea>

  </div>
</div>
    
    
    
    
    
    
    </div>
  )
}
