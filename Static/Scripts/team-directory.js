function select_member(e){
  var n=members[e];
  $("#m_member_icon").html('<img id="icon" src="Images/Team_'+n[0]+'.jpg">'),
  $("#name").html(n[1]),
  $("#time").html(n[2]),
  $("#details").html(n[3])
}

var members=[
  ["001","Chris Walker","2013 - Present","- Former Team Leader -<br>Electrical Engineering"],
  ["002","Kevin Burgon","2014 - 2017","- Former Team Captain -<br>Software Engineering"],
  ["003","Sean Kelleher","2014 - 2016","- Former Team Captain -<br>Mechanical Engineering"],
  ["004","Nathan Copier","2015 - Present","- Team Leader -<br>Software Engineering"],
  ["005","Rachel Schriever","2015 - Present","- Team Leader -<br>Electrical Engineering, Team Journalist, & Team Recruiter"],
  ["006","Gryphon Dubanowich","2016 - Present","- Former Team Captain -<br>Electrical Engineering"],
  ["007","Mitchel Murray","2015 - Present","- Team Captain -<br>Mechanical Engineering & 3D Prototyping"],
  ["008","Jordan Stone","2015 - 2016","Mechanical Engineering"],
  ["009","Sam Christensen","2014 - 2016","Software Engineering & Computer Vision"],
  ["010","Nelson Milller","2016","Software Engineering & Web Development"],
  ["011","Auston Olson","2016","Software Engineering"],
  ["012","Jake Josqvist","2015 - 2016","Mechanical Engineering"],
  ["013","Dianne Althouse","2016 - 2017","Mechanical Engineering"],
  ["014","Jacob Butterfield","2016","Software Engineering & Vision"],
  ["015","Jesse Victors","2013 - 2015","- Former Team Leader -<br>Software Engineering"]
];
